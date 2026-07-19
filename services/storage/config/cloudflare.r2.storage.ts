import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const R2_ENDPOINT = process.env.R2_ENDPOINT || "";
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "";
const BUCKET_NAME = process.env.BUCKET_NAME || 'storageforclassmaster';

export const r2Client = new S3Client({
    region: "auto",
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

export const connectR2 = async () => {
    try {
        await r2Client.send(new ListObjectsV2Command({
            Bucket: BUCKET_NAME,
            MaxKeys: 1
        }));
        console.log("✅ Cloudflare R2 Connected successfully!");
    } catch (error: any) {
        console.error("❌ Cloudflare R2 connection failed:", error.message);
        throw error;
    }
};
