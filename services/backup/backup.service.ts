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
const BACKUP_DIR = path.join(process.cwd(), "backups");

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
    // Production: Every 1 hour
    console.log(`[LOG] 🕒 Backup Scheduler Initialized: Running every 1 HOUR.`);

    // // 🔴 Every 1 hour (at minute 0)
    // cron.schedule('0 * * * *', async () => {

    //🟢 8 Minute Logic((take backup every 8 minutes : for testing)
    cron.schedule('*/8 * * * *', async () => {

        // Step 1: Purono file cleanup kora
        await cleanupOldBackups();

        // Step 2: Notun backup setup
        const fileName = generateBackupFileName();
        const filePath = path.join(BACKUP_DIR, fileName);

        console.log(`[LOG] 🚀 Starting backup process: ${fileName}`);

        try {
            const rawDbUrl = process.env.DATABASE_URL || "";
            const dbUrl = rawDbUrl.split("?")[0];
            const cmd = `pg_dump "${dbUrl}" -F c -f "${filePath}"`;

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
            const stamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });
            try {
                await bot.telegram.sendDocument(
                    CHAT_ID,
                    { source: filePath }, // File path provided
                    {
                        caption: `💾 *Postgres Backup Success*\n\n` +
                            `📊 *Size:* \`${fileSizeMB} MB\`\n` +
                            `🕒 *Stamp:* \`${stamp}\`\n\n` +
                            `🧹 _Cleanup: Old local files (>5 days) removed._\n` +
                            `☁️ _Rclone auto-sync will upload this shortly._`,
                        parse_mode: 'Markdown'
                    }
                );
                console.log(`[LOG] 🚀 Telegram backup document sent successfully.`);
            } catch (telegramError: any) {
                console.error('[LOG] ⚠️ Telegram sendDocument failed, trying text fallback:', telegramError.message);
                
                // If sendDocument fails (e.g. too large), send text-only notification
                await bot.telegram.sendMessage(
                    CHAT_ID,
                    `💾 *Postgres Backup Success* (Text Only)\n\n` +
                    `📊 *Size:* \`${fileSizeMB} MB\`\n` +
                    `🕒 *Stamp:* \`${stamp}\`\n` +
                    `📄 *File:* \`${fileName}\`\n` +
                    `⚠️ *Notice:* Document attachment failed (likely too large or network issue).\n\n` +
                    `🧹 _Cleanup: Old local files (>5 days) removed._\n` +
                    `☁️ _Rclone auto-sync will upload this shortly._`,
                    { parse_mode: 'Markdown' }
                ).catch((err: any) => {
                    console.error('[LOG] ❌ Telegram fallback message failed:', err.message);
                });
            }

        } catch (error: any) {
            console.error('[LOG] ❌ Backup Failed:', error.message);
            // Send plain text to avoid markdown parsing crashes on error content
            await bot.telegram.sendMessage(
                CHAT_ID,
                `🚨 CRITICAL: Backup Failed\nError: ${error.message}`
            ).catch((err: any) => {
                console.error('[LOG] ❌ Failed to send critical Telegram message:', err.message);
            });
        }
    });
};