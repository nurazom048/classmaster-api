import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
    region: "us-east-1", // MinIO তে ডিফল্ট region এটিই থাকে
    endpoint: process.env.MINIO_ENDPOINT, // http://local-minio:9000
    forcePathStyle: true, // S3 API এর জন্য এটি MinIO তে true রাখতে হয়
    credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY || "admin",
        secretAccessKey: process.env.MINIO_SECRET_KEY || "password123",
    },
});