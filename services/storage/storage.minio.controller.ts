import { Request, Response } from "express";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { minioS3Client } from "./storage.minio.config";

export const getStorageFile = async (req: Request, res: Response) => {
    const bucket = req.params.bucket as string;
    const key = req.params[0] as string;

    // 🛡️ safty check if any of this are mising
    if (!bucket || !key) {
        return res.status(400).json({ message: "Invalid bucket or key path" });
    }

    try {
        const command = new GetObjectCommand({
            Bucket: bucket,
            Key: key,
        });

        const s3Response = await minioS3Client.send(command);

        // ফাইল টাইপ সেট করা
        res.setHeader('Content-Type', s3Response.ContentType || 'application/octet-stream');

        // ফাইলটিকে সরাসরি ব্রাউজারে স্ট্রিম করে দেওয়া
        (s3Response.Body as any).pipe(res);

    } catch (err: any) {
        console.error("❌ Storage Fetch Error:", err.message);
        return res.status(404).json({ message: "File not found or access denied" });
    }
};