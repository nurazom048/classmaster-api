import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

// ENV
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || "http://localhost:9000";
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY || "admin";
const MINIO_ACCESS_PASSWORD = process.env.MINIO_SECRET_KEY || "password123";

// S3 Client Setup
export const s3Client = new S3Client({
    region: "us-east-1",
    endpoint: MINIO_ENDPOINT,
    credentials: {
        accessKeyId: MINIO_ACCESS_KEY,
        secretAccessKey: MINIO_ACCESS_PASSWORD,
    },
    forcePathStyle: true,
});

//
// MinIO Connection Checker
export const connectMinIO = async () => {
    try {
        await s3Client.send(new ListBucketsCommand({}));
        console.log("✅ MinIO (S3) Storage connected successfully! ");

        // Internal (Docker use)
        console.log(`📦 Internal Endpoint: ${MINIO_ENDPOINT}`);

        // External (Browser use)
        console.log(`🌍 Public Endpoint: http://localhost:9000`);
        console.log(`🖥️ Console UI: http://localhost:9001`);

        console.log(`🔑 Access Key: ${MINIO_ACCESS_KEY}`);
        console.log(`🔐 Secret Key: ${MINIO_ACCESS_PASSWORD}`);
    } catch (error: any) {
        console.error("❌ MinIO connection failed:", error.message);
        throw error;
    }
};