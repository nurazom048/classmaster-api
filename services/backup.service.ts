import cron from 'node-cron';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
const CHAT_ID = process.env.TELEGRAM_CHAT_ID as string;
const BACKUP_DIR = "/app/backups";

// ব্যাকআপ ফোল্ডার না থাকলে তৈরি করা
if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

export const startBackupScheduler = async () => {
    console.log(`[LOG] 🕒 Local Backup Scheduler Initialized at ${BACKUP_DIR}`);

    // ৫ মিনিট পর পর ব্যাকআপ (আপনি চাইলে সময় পরিবর্তন করতে পারেন)
    cron.schedule('*/5 * * * *', async () => {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `classmaster_db_${timestamp}.dump`;
        const filePath = path.join(BACKUP_DIR, fileName);

        try {
            console.log(`[LOG] 🚀 Starting Local Backup: ${fileName}`);

            const dbUrl = process.env.DATABASE_URL;
            // pg_dump কমান্ড
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

            // ফাইল সাইজ চেক করা (যেন ০ কেবি না হয়)
            const stats = fs.statSync(filePath);
            if (stats.size === 0) {
                throw new Error("Backup file is 0 KB. Database dump failed.");
            }

            console.log(`[LOG] ✅ Local backup saved: ${fileName} (${(stats.size / 1024).toFixed(2)} KB)`);

            // টেলিগ্রামে সাকসেস মেসেজ (ফাইল ডিলিট করা হবে না, Rclone এটা সিঙ্ক করবে)
            await bot.telegram.sendMessage(
                CHAT_ID,
                `✅ *Database Backup Localized*\n📄 File: \`${fileName}\`\n📊 Size: \`${(stats.size / 1024).toFixed(2)} KB\`\n☁️ Waiting for Rclone Sync...`,
                { parse_mode: 'Markdown' }
            );

        } catch (error: any) {
            console.error('[LOG] ❌ Backup Failed:', error.message);
            await bot.telegram.sendMessage(CHAT_ID, `🚨 Backup Failed: ${error.message}`);
        }
    });
};