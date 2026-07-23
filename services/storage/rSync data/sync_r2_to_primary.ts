import dotenv from "dotenv";
dotenv.config();

import { S3Client, ListObjectsV2Command, PutObjectCommand, GetObjectCommand, ListObjectsV2CommandOutput } from "@aws-sdk/client-s3";

// Secondary (Source R2 Account - loaded from .env)
const SECONDARY_ENDPOINT = process.env.SECONDARY_R2_ENDPOINT || process.env.R2_ENDPOINT || "";
const SECONDARY_ACCESS_KEY_ID = process.env.SECONDARY_R2_ACCESS_KEY_ID || process.env.R2_ACCESS_KEY_ID || "";
const SECONDARY_SECRET_ACCESS_KEY = process.env.SECONDARY_R2_SECRET_ACCESS_KEY || process.env.R2_SECRET_ACCESS_KEY || "";

// Primary (Target R2 Account - loaded from .env)
const PRIMARY_ENDPOINT = process.env.R2_ENDPOINT || "";
const PRIMARY_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const PRIMARY_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "";

const BUCKET_NAME = process.env.BUCKET_NAME || 'strogeforclassmaster';

const secondaryClient = new S3Client({
    region: "auto",
    endpoint: SECONDARY_ENDPOINT,
    credentials: {
        accessKeyId: SECONDARY_ACCESS_KEY_ID,
        secretAccessKey: SECONDARY_SECRET_ACCESS_KEY,
    },
});

const primaryClient = new S3Client({
    region: "auto",
    endpoint: PRIMARY_ENDPOINT,
    credentials: {
        accessKeyId: PRIMARY_ACCESS_KEY_ID,
        secretAccessKey: PRIMARY_SECRET_ACCESS_KEY,
    },
});

async function syncSecondaryToPrimaryR2() {
    console.log("🚀 Starting Secondary R2 -> Primary R2 Sync...");
    console.log(`📡 Source R2 Endpoint: ${SECONDARY_ENDPOINT}`);
    console.log(`📡 Target R2 Endpoint: ${PRIMARY_ENDPOINT}`);
    console.log(`📦 Bucket: ${BUCKET_NAME}\n`);

    try {
        let isTruncated = true;
        let continuationToken: string | undefined = undefined;
        let successCount = 0;
        let failCount = 0;

        while (isTruncated) {
            console.log("🔍 Fetching file list from Secondary R2...");
            const listRes: ListObjectsV2CommandOutput = await secondaryClient.send(new ListObjectsV2Command({
                Bucket: BUCKET_NAME,
                ContinuationToken: continuationToken,
            }));

            const contents = listRes.Contents || [];
            console.log(`📁 Found ${contents.length} objects in current batch.`);

            for (const item of contents) {
                if (!item.Key) continue;
                console.log(`\n⏳ Syncing key: ${item.Key} (${((item.Size || 0) / 1024).toFixed(2)} KB)`);

                try {
                    const getObj = await secondaryClient.send(new GetObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key: item.Key,
                    }));

                    const bodyByteArray = await getObj.Body?.transformToByteArray();
                    if (!bodyByteArray) {
                        console.warn(`   ⚠️ Body empty for key ${item.Key}. Skipping.`);
                        continue;
                    }

                    await primaryClient.send(new PutObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key: item.Key,
                        Body: Buffer.from(bodyByteArray),
                        ContentType: getObj.ContentType || "application/octet-stream",
                    }));

                    console.log(`   ✅ Successfully synced to Primary R2!`);
                    successCount++;
                } catch (err: any) {
                    console.error(`   ❌ Failed to sync ${item.Key}:`, err.message);
                    failCount++;
                }
            }

            isTruncated = listRes.IsTruncated || false;
            continuationToken = listRes.NextContinuationToken;
        }

        console.log(`\n==========================================`);
        console.log(`🎉 R2 -> Primary R2 Sync Complete!`);
        console.log(`✅ Successfully Synced: ${successCount} files`);
        console.log(`⚠️ Failed: ${failCount} files`);
        console.log(`==========================================\n`);

    } catch (error: any) {
        console.error("❌ Sync Execution Error:", error.message);
    }
}

syncSecondaryToPrimaryR2();
