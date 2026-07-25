import cron, { ScheduledTask } from "node-cron";
import { appwriteStorage, APPWRITE_BUCKET_ID, getKeyFileId } from "./appwrite.storage";

// node-appwrite InputFile helper for buffer upload
const { InputFile } = require("node-appwrite/file");

export interface CachedFileResult {
    body: Buffer;
    contentType: string;
}

/**
 * 1. Cache Uploader: Uploads file buffer to Appwrite storage using the file key
 * Prevents redundant uploads if file already exists in cache.
 */
export const uploadCache = async (
    key: string,
    fileBuffer: Buffer,
    mimeType?: string
): Promise<boolean> => {
    try {
        if (!APPWRITE_BUCKET_ID) {
            console.warn("⚠️ APPWRITE_BUCKET_ID not configured. Skipping Appwrite cache upload.");
            return false;
        }

        const fileId = getKeyFileId(key);
        const fileName = key.split("/").pop() || "file";

        // Check if file already exists in Appwrite cache
        try {
            await appwriteStorage.getFile(APPWRITE_BUCKET_ID, fileId);
            // File already exists in cache
            return true;
        } catch (checkErr: any) {
            // File does not exist yet; proceed with upload
        }

        const inputFile = InputFile.fromBuffer(fileBuffer, fileName);
        await appwriteStorage.createFile(APPWRITE_BUCKET_ID, fileId, inputFile);
        console.log(`✅ [Appwrite Cache] File successfully cached for key: "${key}" (FileId: ${fileId})`);
        return true;
    } catch (error: any) {
        console.error(`❌ [Appwrite Cache] Upload failed for key "${key}":`, error.message);
        return false;
    }
};

// Alias for cash uploader naming requirement
export const cashUploader = uploadCache;
export const cacheUploader = uploadCache;

/**
 * 2. getCash / getCache: Retrieves cached file binary & mimeType from Appwrite by key
 * Returns null if file is not found in cache.
 */
export const getCash = async (key: string): Promise<CachedFileResult | null> => {
    try {
        if (!APPWRITE_BUCKET_ID) return null;

        const fileId = getKeyFileId(key);

        // Retrieve file metadata to determine content type
        const fileMeta = await appwriteStorage.getFile(APPWRITE_BUCKET_ID, fileId);

        // Download file content ArrayBuffer from Appwrite
        const arrayBuffer = await appwriteStorage.getFileDownload(APPWRITE_BUCKET_ID, fileId);
        const buffer = Buffer.from(arrayBuffer);

        const contentType = fileMeta.mimeType || "application/octet-stream";
        console.log(`🎯 [Appwrite Cache HIT] Key: "${key}" served directly from Appwrite (Saved R2 Class B operation!)`);

        return {
            body: buffer,
            contentType: contentType,
        };
    } catch (error: any) {
        // Cache MISS (404 or missing)
        return null;
    }
};

// Alias for getCache naming requirement
export const getCache = getCash;

/**
 * 3. Auto Delete Cache: Scans Appwrite bucket for files older than 30 days and deletes them
 */
export const deleteExpiredAppwriteCache = async (): Promise<number> => {
    try {
        if (!APPWRITE_BUCKET_ID) return 0;

        console.log("🧹 [Appwrite Cache Cleanup] Scanning for files older than 30 days...");
        const response = await appwriteStorage.listFiles(APPWRITE_BUCKET_ID);
        const files = response.files || [];

        const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
        const now = Date.now();
        let deletedCount = 0;

        for (const file of files) {
            const createdAtTime = new Date(file.$createdAt).getTime();
            const ageInMs = now - createdAtTime;

            if (ageInMs > THIRTY_DAYS_MS) {
                try {
                    await appwriteStorage.deleteFile(APPWRITE_BUCKET_ID, file.$id);
                    deletedCount++;
                    console.log(`🗑️ [Appwrite Cache] Deleted expired file (ID: ${file.$id}, Name: ${file.name}, Age: ${Math.round(ageInMs / (1000 * 60 * 60 * 24))} days)`);
                } catch (delErr: any) {
                    console.error(`❌ Failed to delete expired file ${file.$id}:`, delErr.message);
                }
            }
        }

        console.log(`🧹 [Appwrite Cache Cleanup Completed] Total deleted: ${deletedCount} files.`);
        return deletedCount;
    } catch (error: any) {
        console.error("❌ Error running Appwrite cache cleanup:", error.message);
        return 0;
    }
};

/**
 * Auto Delete Cache Cron Job: Runs daily at midnight (00:00) to auto-delete cache > 30 days old
 */
export const autoDeleteCacheCron = (): ScheduledTask => {
    console.log("⏰ [Cron Initialized] Appwrite 30-day cache cleanup schedule registered (Daily at 00:00)");
    return cron.schedule("0 0 * * *", async () => {
        console.log("⏰ Running Appwrite daily 30-day cache cleanup cron job...");
        await deleteExpiredAppwriteCache();
    });
};

export const autoDeleteCacheCronJob = autoDeleteCacheCron;
