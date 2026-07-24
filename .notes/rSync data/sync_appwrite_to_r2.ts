import dotenv from "dotenv";
dotenv.config();

import { appwriteStorage, APPWRITE_BUCKET_ID } from "../../services/storage/config/appwrite.storage";
import { r2Client } from "../../services/storage/config/cloudflare.r2.storage";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import prisma from "../../prisma/schema/prisma.clint";

const BUCKET_NAME = process.env.BUCKET_NAME || 'stroageforclassmaster';

async function migrateAllAppwriteFilesToR2() {
    console.log("🚀 Starting Direct Appwrite Storage Bucket -> Cloudflare R2 Sync...");
    console.log(`📦 Appwrite Bucket: ${APPWRITE_BUCKET_ID}`);
    console.log(`☁️ R2 Bucket: ${BUCKET_NAME}\n`);

    try {
        // Fetch list of files directly from Appwrite Bucket
        const response = await appwriteStorage.listFiles(APPWRITE_BUCKET_ID);
        console.log(`📁 Found ${response.total} files in Appwrite Storage Bucket.`);

        // Build a lookup map from MD5 hash to DB pdf keys
        const notices = await prisma.notice.findMany({
            where: { pdf: { not: null } }
        });

        const crypto = require("crypto");
        const hashToKeyMap: Record<string, string> = {};
        for (const notice of notices) {
            if (!notice.pdf) continue;
            const hash = crypto.createHash("md5").update(notice.pdf).digest("hex");
            hashToKeyMap[hash] = notice.pdf;
        }

        let successCount = 0;
        let failCount = 0;

        for (const file of response.files) {
            const fileId = file.$id;
            // Determine key in R2: use mapped DB key if found, or default to auto-notice key path
            const key = hashToKeyMap[fileId] || `notice/appwrite-migrated-${fileId}.pdf`;

            console.log(`\n⏳ Syncing File ID: ${fileId}`);
            console.log(`   Target R2 Key: ${key}`);
            console.log(`   Size: ${(file.sizeOriginal / 1024).toFixed(2)} KB`);

            try {
                const downloadResult = await appwriteStorage.getFileDownload(APPWRITE_BUCKET_ID, fileId);
                const fileBuffer = Buffer.from(downloadResult);
                const mimeType = file.mimeType || "application/pdf";

                await r2Client.send(new PutObjectCommand({
                    Bucket: BUCKET_NAME,
                    Key: key,
                    Body: fileBuffer,
                    ContentType: mimeType,
                }));

                console.log(`   ✅ Successfully synced to Cloudflare R2!`);
                successCount++;
            } catch (err: any) {
                console.error(`   ❌ Failed to sync file ${fileId}:`, err.message);
                failCount++;
            }
        }

        console.log(`\n==========================================`);
        console.log(`🎉 Appwrite -> R2 Sync Finished!`);
        console.log(`✅ Successfully Synced: ${successCount} files`);
        console.log(`⚠️ Failed: ${failCount} files`);
        console.log(`==========================================\n`);

    } catch (error: any) {
        console.error("❌ Sync Error:", error.message);
    } finally {
        await prisma.$disconnect();
    }
}

migrateAllAppwriteFilesToR2();
