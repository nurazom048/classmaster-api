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

        const HOST_IP = "127.0.0.1";

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("📦 MinIO Storage Connected");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        console.log(`📦 Internal Endpoint : ${MINIO_ENDPOINT}`);

        console.log(`🌐 MinIO API         : http://localhost:9000`);
        console.log(`🌐 MinIO API IP      : http://${HOST_IP}:9000`);

        console.log(`🖥️ MinIO Console     : http://localhost:9001`);
        console.log(`🖥️ Console IP        : http://${HOST_IP}:9001`);

        console.log(`🔑 Access Key        : ${MINIO_ACCESS_KEY}`);
        console.log(`🔐 Secret Key        : ${MINIO_ACCESS_PASSWORD}`);

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    } catch (error: any) {
        console.error("❌ MinIO connection failed:", error.message);
        throw error;
    }
};