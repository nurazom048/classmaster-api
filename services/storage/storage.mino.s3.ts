import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

// S3 Client Setup
export const s3Client = new S3Client({
    region: "us-east-1",
    endpoint: process.env.MINIO_ENDPOINT || "http://localhost:9000",
    credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY || "admin",
        secretAccessKey: process.env.MINIO_SECRET_KEY || "password123",
    },
    forcePathStyle: true,
});

//
// MinIO Connection Checker
export const connectMinIO = async () => {
    try {
        await s3Client.send(new ListBucketsCommand({}));
        console.log("✅ MinIO (S3) Storage connected successfully!");
    } catch (error: any) {
        console.error("❌ MinIO connection failed:", error.message);
        throw error;
    }
};