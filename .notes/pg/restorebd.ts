import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

/**
 * PostgreSQL Restore Helper Script
 * Usage:
 *   npx ts-node .notes/pg/restorebd.ts <BACKUP_DIR_PATH> <BACKUP_FILE_NAME>
 * 
 * Example:
 *   npx ts-node .notes/pg/restorebd.ts /DATA/AppData/classmaster-api/classmaster_data/backups pg_dup_12_august_26_8:40_pm.dump
 */

async function runRestore() {
    const args = process.argv.slice(2);

    const backupDir = args[0] || process.env.BACKUP_DIR_PATH || path.join(process.cwd(), 'classmaster_data', 'backups');
    const fileName = args[1] || process.env.BACKUP_FILE_NAME;

    if (!fileName) {
        console.error("❌ Error: Missing backup file name.");
        console.log("\n💡 Usage:");
        console.log("   npx ts-node .notes/pg/restorebd.ts <BACKUP_DIR_PATH> <BACKUP_FILE_NAME>");
        console.log("\nExample:");
        console.log("   npm run restore:dump /DATA/AppData/classmaster-api/classmaster_data/backups pg_dup_12_august_26_8:40_pm.dump");
        process.exit(1);
    }

    const fullFilePath = path.resolve(backupDir, fileName);

    if (!fs.existsSync(fullFilePath)) {
        console.error(`❌ Backup file not found at: ${fullFilePath}`);
        process.exit(1);
    }

    console.log(`📂 Backup Path: ${fullFilePath}`);

    // Check target docker container & database
    const containerName = process.env.POSTGRES_CONTAINER_NAME || 'postgres-db-prod';
    const dbName = process.env.POSTGRES_DB || 'classmaster_prod';
    const dbUser = process.env.POSTGRES_USER || 'postgres';

    console.log(`🐳 Target Container: ${containerName}`);
    console.log(`🗄️ Target Database: ${dbName}`);
    console.log(`🚀 Restoring dump file...`);

    try {
        let command: string;
        // Check if pg_restore is directly available (e.g. running inside container or host with pg_restore)
        const hasPgRestore = execSync('which pg_restore 2>/dev/null || true', { encoding: 'utf-8' }).trim().length > 0;

        if (hasPgRestore) {
            const dbHost = process.env.DB_HOST || 'db';
            const dbPort = process.env.DB_PORT || '5432';
            command = `pg_restore -h ${dbHost} -p ${dbPort} -U ${dbUser} -d ${dbName} --clean --if-exists -v < "${fullFilePath}"`;
        } else {
            command = `docker exec -i ${containerName} pg_restore -U ${dbUser} -d ${dbName} --clean --if-exists -v < "${fullFilePath}"`;
        }

        execSync(command, { stdio: 'inherit', env: { ...process.env, PGPASSWORD: process.env.POSTGRES_PASSWORD || '1234' } });
        console.log(`\n🎉 Backup restored successfully!`);
    } catch (err: any) {
        console.error(`\n❌ Restore failed:`, err.message);
        process.exit(1);
    }
}

runRestore();

/*
 ============================================================================
 📌 RESTORE SCRIPT USAGE GUIDE
 ============================================================================

 🔴 কমান্ড (Running via Container):
 docker exec -i api-prod npx ts-node .notes/pg/restorebd.ts <BACKUP_DIR_PATH> <BACKUP_FILE_NAME>

 💡 উদাহরণ:
 docker exec -i api-prod npx ts-node .notes/pg/restorebd.ts /DATA/AppData/classmaster-api/classmaster_data/backups pg_dup_12_august_26_8:40_pm.dump

 ⚙️ Script Feature Summary:
 - হোস্ট / কন্টেইনার উভয় এনভারনমেন্ট থেকেই pg_restore সাপোর্ট করে।
 - ফাইলটি অস্তিত্ব আছে কিনা ভ্যালিডেট করে।
 - --clean --if-exists ফ্লাগ সহ সেফলি টেবিল ড্রপ ও রিস্টোর সম্পন্ন করে।
 ============================================================================
*/

