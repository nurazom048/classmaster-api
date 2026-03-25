import cron from 'node-cron';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { generateBackupFileName } from './helper/backup.helper';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
const CHAT_ID = process.env.TELEGRAM_CHAT_ID as string;
const BACKUP_DIR = "/app/backups";

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

        // Jodi kono file delete hoy, tobe Telegram-e notify koro
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
//***************** Take Scheduled Backup ***********************************/
//***************************************************************************/

export const startBackupScheduler = async () => {
    // [TESTING] Running every 8 minutes
    console.log(`[LOG] 🕒 Backup Scheduler Initialized: Running every 8 MINUTES (Testing Mode).`);

    // 🔴 8 Hour Logic (take backup every 8 Hours : for Production)
    cron.schedule('0 */8 * * *', async () => {

        // 🟢 8 Minute Logic ((take backup every 8 minutes : for testing)
        // cron.schedule('*/8 * * * *', async () => {

        // Step 1: Purono file cleanup kora
        await cleanupOldBackups();

        // Step 2: Notun backup setup
        const fileName = generateBackupFileName();
        const filePath = path.join(BACKUP_DIR, fileName);

        console.log(`[LOG] 🚀 Starting backup process: ${fileName}`);

        try {
            const dbUrl = process.env.DATABASE_URL;
            const cmd = `pg_dump "${dbUrl}" -F c > "${filePath}"`;

            await new Promise((resolve, reject) => {
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        console.error("[LOG] ❌ pg_dump error:", stderr);
                        reject(error);
                    } else {
                        resolve(stdout);
                    }
                });
            });

            const stats = fs.statSync(filePath);
            const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

            if (stats.size === 0) throw new Error("Backup file is empty.");

            console.log(`[LOG] ✅ Backup success: ${fileName} (${fileSizeMB} MB)`);

            // Success Telegram Message
            await bot.telegram.sendDocument(
                CHAT_ID,
                { source: filePath }, // File path provide kora holo
                {
                    caption: `💾 *Postgres Backup Success*\n\n` +
                        `📊 *Size:* \`${fileSizeMB} MB\`\n` +
                        `🕒 *Stamp:* \`${new Date().toLocaleString()}\`\n\n` +
                        `🧹 _Cleanup: Old local files (>5 days) removed._\n` +
                        `☁️ _Rclone auto-sync will upload this shortly._`,
                    parse_mode: 'Markdown'
                }
            );

        } catch (error: any) {
            console.error('[LOG] ❌ Backup Failed:', error.message);
            await bot.telegram.sendMessage(
                CHAT_ID,
                `🚨 *CRITICAL: Backup Failed*\nError: \`${error.message}\``,
                { parse_mode: 'Markdown' }
            );
        }
    });
};