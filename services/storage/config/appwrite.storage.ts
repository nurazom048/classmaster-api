import { Client, Storage } from "node-appwrite";
import crypto from "crypto";

const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID || "";
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY || "";
export const APPWRITE_BUCKET_ID = process.env.APPWRITE_BUCKET_ID || "";

export const appwriteClient = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);

export const appwriteStorage = new Storage(appwriteClient);

/**
 * Returns a deterministic 32-character hexadecimal string from a storage key,
 * which fits Appwrite's File ID naming rules (alphanumeric, max 36 chars).
 */
export const getKeyFileId = (key: string): string => {
    return crypto.createHash("md5").update(key).digest("hex");
};

export const connectAppwrite = async () => {
    try {
        if (!APPWRITE_BUCKET_ID) {
            throw new Error("APPWRITE_BUCKET_ID is not configured in environment variables.");
        }
        await appwriteStorage.listFiles({
            bucketId: APPWRITE_BUCKET_ID,
        });
        console.log("✅ Appwrite Storage connected successfully!");
    } catch (error: any) {
        console.error("❌ Appwrite connection failed:", error.message);
        throw error;
    }
};
