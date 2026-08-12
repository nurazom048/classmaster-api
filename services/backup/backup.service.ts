import cron from 'node-cron';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import prisma from '../../prisma/schema/prisma.clint';
import { generateBackupFileName } from '../../.notes/database_restore_helper/backup.helper';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
const CHAT_ID = process.env.TELEGRAM_CHAT_ID as string;
const BACKUP_DIR = path.join(process.cwd(), "classmaster_data", "backups");

// Backup directory check & creation
if (!fs.existsSync(BACKUP_DIR)) {
    console.log(`[LOG] 📁 Creating backup directory at ${BACKUP_DIR}`);
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

//***************************************************************************/
//** 🗑️ Delete older files (>5 days) & Notify Telegram *********************/
//***************************************************************************/

const cleanupOldBackups = async () => {
    console.log(`[LOG] 🧹 Checking for files older than 5 days...`);

    try {
        const files = fs.readdirSync(BACKUP_DIR);
        const now = Date.now();
        const fiveDaysInMs = 5 * 24 * 60 * 60 * 1000;

        let deletedFiles: string[] = [];

        for (const file of files) {
            const filePath = path.join(BACKUP_DIR, file);
            const stats = fs.statSync(filePath);

            if (now - stats.mtimeMs > fiveDaysInMs) {
                fs.unlinkSync(filePath);
                deletedFiles.push(file);
                console.log(`[LOG] 🗑️ Deleted: ${file}`);
            }
        }

        if (deletedFiles.length > 0) {
            const message = `🧹 *Local Storage Cleanup*\n\n` +
                `🗑️ Deleted *${deletedFiles.length}* old backup(s) older than 5 days.\n` +
                `📄 Files: \`${deletedFiles.join(', ')}\``;

            await bot.telegram.sendMessage(CHAT_ID, message, { parse_mode: 'Markdown' });
            console.log(`[LOG] ✨ Cleanup finished. ${deletedFiles.length} files removed.`);
        } else {
            console.log(`[LOG] ℹ️ No old files found.`);
        }
    } catch (error: any) {
        console.error(`[LOG] ❌ Cleanup Error:`, error.message);
    }
};

//***************************************************************************/
//** ⚙️ Execute pg_dump with fallback **************************************/
//***************************************************************************/

const executePgDump = async (dbUrl: string, filePath: string): Promise<void> => {
    const cleanUrl = dbUrl.split("?")[0];
    
    const hasHostPgDump = await new Promise<boolean>((resolve) => {
        exec('which pg_dump', (err) => resolve(!err));
    });

    const cmd = hasHostPgDump
        ? `pg_dump "${cleanUrl}" -F c -f "${filePath}"`
        : `docker exec -i postgres-db pg_dump "${cleanUrl}" -F c > "${filePath}"`;

    return new Promise((resolve, reject) => {
        exec(cmd, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};

//***************************************************************************/
//***************** Perform Postgres Backup *********************************/
//***************************************************************************/

export const performBackup = async () => {
    const isProduction = process.env.NODE_ENV === 'production';
    const activeDbUrl = process.env.PROD_DATABASE_URL || process.env.DATABASE_URL || process.env.DEV_DATABASE_URL || "";

    if (!activeDbUrl) {
        console.error(`[LOG] ❌ Backup failed: No database URL configured.`);
        return;
    }

    // Check if database actually has data before running backup
    try {
        const accountCount = await prisma.account.count();
        if (accountCount === 0) {
            console.log(`[LOG] ℹ️ Database has 0 records in Account table. Skipping backup generation.`);
            return;
        }
    } catch (checkErr: any) {
        console.warn(`[LOG] ⚠️ Could not verify table row count: ${checkErr.message}. Proceeding with backup attempt...`);
    }

    // Step 1: Cleanup old backups in development mode
    if (!isProduction) {
        await cleanupOldBackups();
    }

    // Step 2: Postgres pg_dump Backup
    const fileName = generateBackupFileName();
    const filePath = path.join(BACKUP_DIR, fileName);

    console.log(`[LOG] 🚀 Starting Postgres backup process: ${fileName}`);

    try {
        await executePgDump(activeDbUrl, filePath);

        const stats = fs.statSync(filePath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

        if (stats.size === 0) throw new Error("Backup file is empty.");

        console.log(`[LOG] ✅ Backup success: ${fileName} (${fileSizeMB} MB)`);

        // Send Telegram document notification for DB Backup success
        const stamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });
        try {
            await bot.telegram.sendDocument(
                CHAT_ID,
                { source: filePath },
                {
                    caption: `💾 *Postgres Backup Success (SQL Dump)*\n\n` +
                        `📊 *Size:* \`${fileSizeMB} MB\`\n` +
                        `🕒 *Stamp:* \`${stamp}\`\n` +
                        `🌍 *Mode:* \`${isProduction ? 'Production (Telegram Only)' : 'Development'}\``,
                    parse_mode: 'Markdown'
                }
            );
            console.log(`[LOG] 🚀 Telegram backup document sent successfully.`);
        } catch (telegramError: any) {
            console.error('[LOG] ⚠️ Telegram sendDocument failed, trying text fallback:', telegramError.message);

            await bot.telegram.sendMessage(
                CHAT_ID,
                `💾 *Postgres Backup Success* (Text Only)\n\n` +
                `📊 *Size:* \`${fileSizeMB} MB\`\n` +
                `🕒 *Stamp:* \`${stamp}\`\n` +
                `📄 *File:* \`${fileName}\`\n` +
                `⚠️ *Notice:* Document attachment failed (likely network issue).`,
                { parse_mode: 'Markdown' }
            ).catch((err: any) => {
                console.error('[LOG] ❌ Telegram fallback message failed:', err.message);
            });
        }

    } catch (error: any) {
        console.error('[LOG] ❌ Backup Failed:', error.message);
        await bot.telegram.sendMessage(
            CHAT_ID,
            `🚨 CRITICAL: Postgres Backup Failed\nError: ${error.message}`
        ).catch((err: any) => {
            console.error('[LOG] ❌ Failed to send critical Telegram message:', err.message);
        });
    } finally {
        // In production mode, remove the local file immediately after sending
        if (isProduction && fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
                console.log(`[LOG] 🧹 Production mode: deleted local backup file ${fileName}`);
            } catch (unlinkErr: any) {
                console.error(`[LOG] ⚠️ Failed to delete local backup file in production:`, unlinkErr.message);
            }
        }
    }
};

//***************************************************************************/
//***************** Backup Scheduler ****************************************/
//***************************************************************************/

export const startBackupScheduler = async () => {
    console.log(`[LOG] ⏰ Backup Scheduler initialized for Postgres (Every 10 minutes).`);
    cron.schedule('*/10 * * * *', async () => {
        await performBackup();
    });
};