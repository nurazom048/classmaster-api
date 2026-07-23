import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { minioClient } from "./config/minio.storage";
import { r2Client } from "./config/cloudflare.r2.storage";
import fs from "fs";
import { StorageProvider } from "../../utils/enums";

// Determine which active storage provider to use from environment
export const storage = (process.env.STORAGE_PROVIDER || StorageProvider.R2) as StorageProvider;
export const BUCKET_NAME = process.env.BUCKET_NAME || 'stroageforclassmaster';

// Get the active S3 client based on StorageProvider enum and environment settings
export const getActiveClient = (provider?: StorageProvider) => {
    const activeProvider = provider || storage;

    // Dynamic S3 Provider resolution (S3, MinIO, R2)
    const activeEnvProvider = (process.env.STORAGE_PROVIDER || "").toLowerCase();
    if (activeProvider === StorageProvider.MINIO || activeEnvProvider === StorageProvider.MINIO) {
        return minioClient;
    }

    // Default to R2 / Primary S3 Client
    return r2Client;
};

/**
 * Uploads a file (buffer, stream, or path) to the active S3 storage provider (Cloudflare R2 / MinIO)
 */
export const uploadFile = async (
    bucketName: string,
    key: string,
    file: any,
    provider?: StorageProvider
): Promise<string> => {
    const activeProvider = provider || storage;
    const client = getActiveClient(activeProvider);
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
 * Deletes a file from the active S3 storage provider (Cloudflare R2 / MinIO)
 */
export const deleteFile = async (
    bucketName: string,
    key: string,
    provider?: StorageProvider
): Promise<void> => {
    const activeProvider = provider || storage;
    const client = getActiveClient(activeProvider);
    await client.send(new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
    }));
};

/**
 * Retrieves file binary and metadata from the active S3 storage provider (Cloudflare R2 / MinIO)
 */
export const getFile = async (
    bucketName: string,
    key: string,
    provider?: StorageProvider
): Promise<{ body: any; contentType: string }> => {
    const activeProvider = provider || storage;
    const client = getActiveClient(activeProvider);
    const response = await client.send(new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
    }));
    return {
        body: response.Body,
        contentType: response.ContentType || "application/octet-stream",
    };
};
