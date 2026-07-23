import fs from 'fs';
import path from 'path';
import prisma from '../../prisma/schema/prisma.clint';

async function restoreDatabase() {
    // 1. Parse CLI arguments
    const args = process.argv.slice(2);
    let backupFilePath = args[0];

    if (!backupFilePath) {
        // Find the latest json backup in the backups directory
        const backupsDir = path.join(process.cwd(), 'backups');
        if (!fs.existsSync(backupsDir)) {
            console.error("❌ No backups directory found. Please specify a JSON file path.");
            process.exit(1);
        }

        const files = fs.readdirSync(backupsDir)
            .filter(f => f.endsWith('.json'))
            .map(f => ({ name: f, time: fs.statSync(path.join(backupsDir, f)).mtime.getTime() }))
            .sort((a, b) => b.time - a.time);

        if (files.length === 0) {
            console.error("❌ No JSON backup files found in 'backups/' directory. Please specify a JSON file path.");
            process.exit(1);
        }

        backupFilePath = path.join(backupsDir, files[0].name);
        console.log(`ℹ️ No file specified. Automatically using the latest backup file: ${backupFilePath}`);
    } else {
        backupFilePath = path.resolve(backupFilePath);
    }

    if (!fs.existsSync(backupFilePath)) {
        console.error(`❌ Backup file not found: ${backupFilePath}`);
        process.exit(1);
    }

    console.log(`🚀 Starting database restore from: ${backupFilePath}`);

    // 2. Read and parse JSON backup data
    let backupData: Record<string, any[]>;
    try {
        const fileContent = fs.readFileSync(backupFilePath, 'utf-8');
        backupData = JSON.parse(fileContent);
    } catch (err: any) {
        console.error(`❌ Failed to read or parse JSON file: ${err.message}`);
        process.exit(1);
    }

    const tableNames = Object.keys(backupData);
    console.log(`📦 Found ${tableNames.length} tables in backup.`);

    // 3. Fetch column types from information_schema
    console.log("🔍 Fetching database column metadata...");
    const columnTypes: Record<string, Record<string, string>> = {};
    try {
        const columnsRes = await prisma.$queryRawUnsafe<{ table_name: string, column_name: string, data_type: string }[]>(`
            SELECT table_name, column_name, data_type 
            FROM information_schema.columns 
            WHERE table_schema = 'public'
        `);

        for (const col of columnsRes) {
            if (!columnTypes[col.table_name]) {
                columnTypes[col.table_name] = {};
            }
            columnTypes[col.table_name][col.column_name] = col.data_type;
        }
    } catch (err: any) {
        console.error(`❌ Failed to fetch database schema info: ${err.message}`);
        process.exit(1);
    }

    // 4. Try to disable triggers (if user is superuser, this is faster)
    let sessionRoleResetNeeded = false;
    try {
        await prisma.$executeRawUnsafe(`SET session_replication_role = 'replica';`);
        console.log("🔓 Disabled database constraints temporarily (replica session role).");
        sessionRoleResetNeeded = true;
    } catch (err) {
        console.log("ℹ️ session_replication_role bypass not permitted/superuser unavailable. Relying on smart constraint retry-loop instead.");
    }

    // 5. Truncate / Clear all tables in backup
    console.log("🧹 Clearing existing tables...");
    const pendingTruncate = new Set(tableNames);
    let truncateAttempts = 0;
    const maxTruncateAttempts = tableNames.length * 3;

    while (pendingTruncate.size > 0 && truncateAttempts < maxTruncateAttempts) {
        truncateAttempts++;
        let clearedInThisTurn = 0;

        for (const tableName of Array.from(pendingTruncate)) {
            try {
                // Try simple truncate/delete
                await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${tableName}" CASCADE;`);
                pendingTruncate.delete(tableName);
                clearedInThisTurn++;
                console.log(`   ✅ Cleared table: ${tableName}`);
            } catch (err) {
                // Foreign key constraint failure or other error, we will retry in later cycle
            }
        }

        // Break if we made no progress in this turn to avoid infinite loop
        if (clearedInThisTurn === 0 && pendingTruncate.size > 0 && !sessionRoleResetNeeded) {
            console.log("⚠️ Cascade truncate stalled. Attempting DELETE FROM in dependency order...");
            for (const tableName of Array.from(pendingTruncate)) {
                try {
                    await prisma.$executeRawUnsafe(`DELETE FROM "${tableName}";`);
                    pendingTruncate.delete(tableName);
                    clearedInThisTurn++;
                    console.log(`   ✅ Cleared table (DELETE): ${tableName}`);
                } catch (err) {
                    // Try next table
                }
            }

            if (clearedInThisTurn === 0) {
                console.error(`❌ Failed to clear tables due to database constraints on remaining tables: ${Array.from(pendingTruncate).join(', ')}`);
                if (sessionRoleResetNeeded) {
                    await prisma.$executeRawUnsafe(`SET session_replication_role = 'origin';`);
                }
                process.exit(1);
            }
        }
    }

    // 6. Insert data table by table
    console.log("📥 Restoring data...");
    const pendingInsert = new Set(tableNames);
    let insertAttempts = 0;
    const maxInsertAttempts = tableNames.length * 5;
    let lastError: Error | null = null;

    while (pendingInsert.size > 0 && insertAttempts < maxInsertAttempts) {
        insertAttempts++;
        let insertedInThisTurn = 0;

        for (const tableName of Array.from(pendingInsert)) {
            const rows = backupData[tableName];

            if (!rows || rows.length === 0) {
                pendingInsert.delete(tableName);
                insertedInThisTurn++;
                console.log(`   ✅ Table ${tableName} is empty in backup. Skipped.`);
                continue;
            }

            try {
                // Pre-process row values to match DB types
                const columns = Object.keys(rows[0]);
                const columnsSql = columns.map(col => `"${col}"`).join(', ');

                // Bulk insert rows in chunks of 100
                const chunkSize = 100;
                for (let i = 0; i < rows.length; i += chunkSize) {
                    const chunk = rows.slice(i, i + chunkSize);
                    const valuesPlaceholders: string[] = [];
                    const values: any[] = [];
                    let paramIndex = 1;

                    for (const row of chunk) {
                        const rowPlaceholders: string[] = [];
                        for (const col of columns) {
                            rowPlaceholders.push(`$${paramIndex++}`);
                            
                            let val = row[col];
                            // Match raw value type to actual schema database type
                            const type = columnTypes[tableName]?.[col];
                            if (val !== null && val !== undefined) {
                                if (type === 'bigint') {
                                    val = BigInt(val);
                                } else if (type?.includes('timestamp') || type === 'date') {
                                    val = new Date(val);
                                } else if (type === 'boolean' && typeof val === 'string') {
                                    val = val === 'true';
                                }
                            }
                            values.push(val);
                        }
                        valuesPlaceholders.push(`(${rowPlaceholders.join(', ')})`);
                    }

                    const insertQuery = `INSERT INTO "${tableName}" (${columnsSql}) VALUES ${valuesPlaceholders.join(', ')}`;
                    await prisma.$executeRawUnsafe(insertQuery, ...values);
                }

                pendingInsert.delete(tableName);
                insertedInThisTurn++;
                console.log(`   ✅ Restored table ${tableName} (${rows.length} rows)`);
            } catch (err: any) {
                lastError = err;
                // If it fails (usually due to missing foreign key because the referenced table is not yet inserted)
                // we'll retry on the next turn
            }
        }

        // Break if we made no progress in this turn to avoid infinite loop
        if (insertedInThisTurn === 0 && pendingInsert.size > 0) {
            console.error(`❌ Restore stalled due to insertion error: ${lastError?.message}`);
            console.error(`Unresolved tables: ${Array.from(pendingInsert).join(', ')}`);
            if (sessionRoleResetNeeded) {
                await prisma.$executeRawUnsafe(`SET session_replication_role = 'origin';`);
            }
            process.exit(1);
        }
    }

    // 7. Cleanup session replication role if set
    if (sessionRoleResetNeeded) {
        await prisma.$executeRawUnsafe(`SET session_replication_role = 'origin';`);
        console.log("🔒 Re-enabled database constraints (origin session role).");
    }

    console.log(`🎉 Database restore completed successfully!`);
}

restoreDatabase()
    .catch((err) => {
        console.error("❌ Unexpected error during restore:", err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
