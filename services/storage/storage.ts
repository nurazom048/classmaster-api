import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { minioClient } from "./config/minio.storage";
import { r2Client } from "./config/cloudflare.r2.storage";
import { appwriteStorage, APPWRITE_BUCKET_ID, getKeyFileId } from "./config/appwrite.storage";
import { InputFile } from "node-appwrite/file";
import fs from "fs";
import { StorageProvider } from "../../utils/enums";

// Determine which storage to use: 'minio', 'cloudflare' (r2), or 'appwrite'

export const storage = (process.env.STORAGE_PROVIDER || StorageProvider.R2) as StorageProvider;
export const BUCKET_NAME = process.env.BUCKET_NAME || 'storageforclassmaster';

// Get the active client
export const getActiveClient = () => {
    if (storage === StorageProvider.MINIO || storage === StorageProvider.R2) {
        return r2Client;
    }
    if (storage === StorageProvider.APPWRITE) {
        return appwriteStorage as any;
    }
    return minioClient;
};

/**
 * Helper to construct an Appwrite InputFile from various types of file body
 */
const getAppwriteInputFile = async (file: any, key: string): Promise<any> => {
    const filename = key.split('/').pop() || "file";
    if (file.buffer) {
        return InputFile.fromBuffer(file.buffer, filename);
    }
    if (file.path) {
        return InputFile.fromPath(file.path, filename);
    }
    if (Buffer.isBuffer(file)) {
        return InputFile.fromBuffer(file, filename);
    }
    // Handle readable stream
    if (file && typeof file.pipe === 'function') {
        const chunks: any[] = [];
        for await (const chunk of file) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);
        return InputFile.fromBuffer(buffer, filename);
    }
    // Fallback for string or raw values
    return InputFile.fromBuffer(Buffer.from(file), filename);
};

/**
 * Uploads a file (buffer, stream, or path) to the active storage provider (MinIO, Cloudflare R2, or Appwrite)
 * Automatically redirects auto-notices to Appwrite to reduce R2 A/B operations.
 */
export const uploadFile = async (
    bucketName: string,
    key: string,
    file: any,
    provider?: StorageProvider
): Promise<string> => {
    const activeProvider = provider || storage;
    const isAutoNotice = key.includes("auto-notice");
    if (activeProvider === StorageProvider.APPWRITE || isAutoNotice) {
        const fileId = getKeyFileId(key);
        const targetBucket = bucketName || APPWRITE_BUCKET_ID;
        const inputFile = await getAppwriteInputFile(file, key);
        await appwriteStorage.createFile(targetBucket, fileId, inputFile);
        return key;
    }

    const client = activeProvider === StorageProvider.R2 ? r2Client : minioClient;
    const fileBody = file.buffer ? file.buffer : (file.path ? fs.createReadStream(file.path) : file);
    const mimeType = file.mimetype || "application/octet-stream";

    await client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: fileBody,
        ContentType: mimeType,
    }));
    return key;
};

/**
 * Deletes a file from the active storage provider (MinIO, Cloudflare R2, or Appwrite)
 * Automatically deletes auto-notices from Appwrite to reduce R2 A/B operations.
 */
export const deleteFile = async (
    bucketName: string,
    key: string,
    provider?: StorageProvider
): Promise<void> => {
    const activeProvider = provider || storage;
    const isAutoNotice = key.includes("auto-notice");
    if (activeProvider === StorageProvider.APPWRITE || isAutoNotice) {
        try {
            const fileId = getKeyFileId(key);
            const targetBucket = bucketName || APPWRITE_BUCKET_ID;
            await appwriteStorage.deleteFile(targetBucket, fileId);
            if (activeProvider === StorageProvider.APPWRITE) return;
        } catch (error) {
            if (activeProvider === StorageProvider.APPWRITE) throw error;
        }
    }

    const client = activeProvider === StorageProvider.R2 ? r2Client : minioClient;
    await client.send(new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
    }));
};

/**
 * Retrieves file binary and metadata from the active storage provider (MinIO, Cloudflare R2, or Appwrite)
 * Automatically checks Appwrite for auto-notices, with general fallback between providers.
 */
export const getFile = async (
    bucketName: string,
    key: string,
    provider?: StorageProvider
): Promise<{ body: any; contentType: string }> => {
    const activeProvider = provider || storage;
    const isAutoNotice = key.includes("auto-notice");
    if (activeProvider === StorageProvider.APPWRITE || isAutoNotice) {
        try {
            const fileId = getKeyFileId(key);
            const targetBucket = bucketName || APPWRITE_BUCKET_ID;
            const fileMetadata = await appwriteStorage.getFile(targetBucket, fileId);
            const fileBuffer = await appwriteStorage.getFileDownload(targetBucket, fileId);
            return {
                body: fileBuffer,
                contentType: fileMetadata.mimeType || "application/octet-stream",
            };
        } catch (error) {
            if (activeProvider === StorageProvider.APPWRITE) throw error;
            console.log(`Fallback: Appwrite getFile failed for key ${key}, trying default provider.`);
        }
    }

    // Default provider logic (R2 / MinIO)
    try {
        const client = activeProvider === StorageProvider.R2 ? r2Client : minioClient;
        const response = await client.send(new GetObjectCommand({
            Bucket: bucketName,
            Key: key,
        }));
        return {
            body: response.Body,
            contentType: response.ContentType || "application/octet-stream",
        };
    } catch (error) {
        // If default provider failed and we haven't checked Appwrite yet (and key wasn't auto-notice)
        if (!isAutoNotice) {
            try {
                const fileId = getKeyFileId(key);
                const targetBucket = bucketName || APPWRITE_BUCKET_ID;
                const fileMetadata = await appwriteStorage.getFile(targetBucket, fileId);
                const fileBuffer = await appwriteStorage.getFileDownload(targetBucket, fileId);
                return {
                    body: fileBuffer,
                    contentType: fileMetadata.mimeType || "application/octet-stream",
                };
            } catch (appwriteErr) {
                // Ignore and throw original error
            }
        }
        throw error;
    }
};
