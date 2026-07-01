import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../../services/storage/storage.mino.s3";
import fs from 'fs'; // 👈 ফাইল সিস্টেম ইমপোর্ট করা হলো diskStorage সাপোর্ট করার জন্য

const BUCKET_NAME = 'storageforclassmaster';


/**
 * Uploads an image buffer directly to MinIO using the clean path key.
 */
export const uploadAccountImageToMinIO = async (
    file: any, // Express.Multer.File
    key: string
): Promise<void> => {
    // 💡 FIX: Multer যদি 'diskStorage' ইউজ করে তাহলে file.buffer undefined হয়। 
    // সেক্ষেত্রে আমরা fs.createReadStream দিয়ে ফাইল রিড করব।
    const fileBody = file.buffer ? file.buffer : fs.createReadStream(file.path);

    await s3Client.send(new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: fileBody,
        ContentType: file.mimetype,
    }));
};

/**
 * Deletes an old file from MinIO bucket given its key path.
 */
export const deleteAccountImageFromMinIO = async (key: string): Promise<void> => {
    try {
        await s3Client.send(new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        }));
        console.log(`Successfully deleted old image: ${key}`);
    } catch (error) {
        // Safe catch block ensures minor delete failures don't crash the main edit process
        console.error(`Failed to delete key ${key} from MinIO:`, error);
    }
};