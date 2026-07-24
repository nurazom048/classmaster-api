import dotenv from "dotenv";
dotenv.config();

import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command, ListObjectsV2CommandOutput } from "@aws-sdk/client-s3";

// Secondary (Source R2 - loaded from .env)
const SECONDARY_ENDPOINT = process.env.SECONDARY_R2_ENDPOINT || "";
const SECONDARY_ACCESS_KEY_ID = process.env.SECONDARY_R2_ACCESS_KEY_ID || "";
const SECONDARY_SECRET_ACCESS_KEY = process.env.SECONDARY_R2_SECRET_ACCESS_KEY || "";

// Primary (Target R2 - loaded from .env)
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

async function runR2ToR2Migration() {
    console.log("🚀 Testing Primary R2 connection...");
    try {
        await primaryClient.send(new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: "migration-test.txt",
            Body: Buffer.from("Primary R2 test upload"),
            ContentType: "text/plain",
        }));
        console.log(`✅ SUCCESS: Primary R2 Write Access Verified on bucket '${BUCKET_NAME}'!`);
    } catch (err: any) {
        console.error(`❌ Primary R2 Write Failed: ${err.name} - ${err.message}`);
        return;
    }

    console.log("\n🚀 Starting Sync from Secondary -> Primary...");
    try {
        let isTruncated = true;
        let continuationToken: string | undefined = undefined;
        let success = 0;
        let fail = 0;

        while (isTruncated) {
            const listRes: ListObjectsV2CommandOutput = await secondaryClient.send(new ListObjectsV2Command({
                Bucket: BUCKET_NAME,
                ContinuationToken: continuationToken,
            }));

            const items = listRes.Contents || [];
            console.log(`📁 Found ${items.length} files in this batch.`);

            for (const item of items) {
                if (!item.Key) continue;
                console.log(`\n⏳ Syncing key: ${item.Key} (${((item.Size || 0) / 1024).toFixed(2)} KB)`);

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

                    console.log(`   ✅ Successfully transferred to Primary R2!`);
                    success++;
                } catch (err: any) {
                    console.error(`   ❌ Failed: ${err.message}`);
                    fail++;
                }
            }

            isTruncated = listRes.IsTruncated || false;
            continuationToken = listRes.NextContinuationToken;
        }

        console.log(`\n==========================================`);
        console.log(`🎉 Migration Finished!`);
        console.log(`✅ Synced: ${success} files`);
        console.log(`⚠️ Failed: ${fail} files`);
        console.log(`==========================================\n`);

    } catch (err: any) {
        console.error("❌ Migration Error:", err.message);
    }
}

runR2ToR2Migration();
