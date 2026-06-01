import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

// 💡 ENV Variables (সেন্ট্রালাইজড এবং এক্সপোর্টেড)
export const BUCKET_NAME = process.env.S3_BUCKET_NAME || 'storageforclassmaster';
export const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || "http://localhost:9000";
export const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY || "admin";
export const MINIO_ACCESS_PASSWORD = process.env.MINIO_SECRET_KEY || "password123";

// 💡 S3 Client Setup (নাম পরিবর্তন করে minioS3Client রাখা হয়েছে)
export const minioS3Client = new S3Client({
    region: "us-east-1",
    endpoint: MINIO_ENDPOINT,
    credentials: {
        accessKeyId: MINIO_ACCESS_KEY,
        secretAccessKey: MINIO_ACCESS_PASSWORD,
    },
    forcePathStyle: true,
});

// MinIO Connection Checker
export const connectMinIO = async () => {

    const publicReadPolicy = {
        Version: "2012-10-17",
        Statement: [
            {
                Sid: "PublicReadGetObject",
                Effect: "Allow",
                Principal: "*",
                Action: ["s3:GetObject"],
                Resource: [`arn:aws:s3:::${BUCKET_NAME}/*`] // তোমার বাকেটের ভেতরের সব অবজেক্ট
            }
        ]
    };



    try {
        // 💡 এখানে minioS3Client ব্যবহার করা হয়েছে
        await minioS3Client.send(new ListBucketsCommand({}));

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