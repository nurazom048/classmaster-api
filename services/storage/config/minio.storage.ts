import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || "http://localhost:9000";
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY || "admin";
const MINIO_ACCESS_PASSWORD = process.env.MINIO_SECRET_KEY || "password123";
const BUCKET_NAME = process.env.BUCKET_NAME || 'storageforclassmaster';

export const minioClient = new S3Client({
    region: "us-east-1",
    endpoint: MINIO_ENDPOINT,
    credentials: {
        accessKeyId: MINIO_ACCESS_KEY,
        secretAccessKey: MINIO_ACCESS_PASSWORD,
    },
    forcePathStyle: true,
});

export const connectMinIO = async () => {
    try {
        await minioClient.send(new ListObjectsV2Command({
            Bucket: BUCKET_NAME,
            MaxKeys: 1
        }));
        console.log("✅ MinIO (S3) Storage connected successfully!");
    } catch (error: any) {
        console.error("❌ MinIO connection failed:", error.message);
        throw error;
    }
};
