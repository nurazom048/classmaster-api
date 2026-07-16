import { uploadFile, deleteFile } from "../../../utils/bucket";

const BUCKET_NAME = 'storageforclassmaster';

/**
 * Uploads an image buffer directly to storage (MinIO or Appwrite) using the clean path key.
 */
export const uploadAccountImageToMinIO = async (
    file: any, // Express.Multer.File
    key: string
): Promise<void> => {
    await uploadFile(BUCKET_NAME, key, file);
};

/**
 * Deletes an old file from bucket given its key path.
 */
export const deleteAccountImageFromMinIO = async (key: string): Promise<void> => {
    try {
        await deleteFile(BUCKET_NAME, key);
        console.log(`Successfully deleted old image: ${key}`);
    } catch (error) {
        console.error(`Failed to delete key ${key} from storage:`, error);
    }
};