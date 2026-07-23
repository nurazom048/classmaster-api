import dotenv from "dotenv";
dotenv.config();

import { S3Client, ListObjectsV2Command, PutObjectCommand, GetObjectCommand, ListObjectsV2CommandOutput } from "@aws-sdk/client-s3";

// Secondary (Source R2 Account - loaded from .env)
const SECONDARY_ENDPOINT = process.env.SECONDARY_R2_ENDPOINT || "";
const SECONDARY_ACCESS_KEY_ID = process.env.SECONDARY_R2_ACCESS_KEY_ID || "";
const SECONDARY_SECRET_ACCESS_KEY = process.env.SECONDARY_R2_SECRET_ACCESS_KEY || "";

// Primary (Target R2 Account - loaded from .env)
const PRIMARY_ENDPOINT = process.env.R2_ENDPOINT || "";
const PRIMARY_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const PRIMARY_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "";

const BUCKET_NAME = process.env.BUCKET_NAME || 'stroageforclassmaster';

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

async function runDirectR2ToR2Sync() {
    console.log("🚀 Initializing Direct R2 to R2 Sync...");
    console.log(`📡 Secondary R2 Endpoint: ${SECONDARY_ENDPOINT}`);
    console.log(`📡 Primary R2 Endpoint:   ${PRIMARY_ENDPOINT}\n`);

    if (!SECONDARY_ENDPOINT || !PRIMARY_ENDPOINT) {
        console.error("❌ Missing R2 credentials in environment variables.");
        return;
    }

    try {
        let isTruncated = true;
        let continuationToken: string | undefined = undefined;
        let successCount = 0;
        let failCount = 0;

        while (isTruncated) {
            const listRes: ListObjectsV2CommandOutput = await secondaryClient.send(new ListObjectsV2Command({
                Bucket: BUCKET_NAME,
                ContinuationToken: continuationToken,
            }));

            const items = listRes.Contents || [];
            console.log(`📁 Found ${items.length} files in Secondary R2.`);

            for (const item of items) {
                if (!item.Key) continue;
                console.log(`⏳ Syncing key: ${item.Key} (${((item.Size || 0) / 1024).toFixed(2)} KB)`);

                try {
                    const getObj = await secondaryClient.send(new GetObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key: item.Key,
                    }));

                    const byteArray = await getObj.Body?.transformToByteArray();
                    if (!byteArray) continue;

                    await primaryClient.send(new PutObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key: item.Key,
                        Body: Buffer.from(byteArray),
                        ContentType: getObj.ContentType || "application/octet-stream",
                    }));

                    console.log(`   ✅ Transferred to Primary R2!`);
                    successCount++;
                } catch (err: any) {
                    console.error(`   ❌ Error copying ${item.Key}:`, err.message);
                    failCount++;
                }
            }

            isTruncated = listRes.IsTruncated || false;
            continuationToken = listRes.NextContinuationToken;
        }

        console.log(`\n==========================================`);
        console.log(`🎉 R2 -> R2 Migration Finished!`);
        console.log(`✅ Synced: ${successCount} files`);
        console.log(`⚠️ Failed: ${failCount} files`);
        console.log(`==========================================\n`);

    } catch (err: any) {
        console.error("❌ R2 Sync Error:", err.message);
    }
}

runDirectR2ToR2Sync();
