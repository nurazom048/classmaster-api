import { Client, Storage } from "node-appwrite";
import { File } from "buffer";
import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../services/storage/storage.mino.s3";
import crypto from "crypto";
import fs from "fs";

// Storage Provider toggle ('minio' or 'appwrite')
const STORAGE_PROVIDER = process.env.STORAGE_PROVIDER || "minio";

// Appwrite Setup
const appwriteClient = new Client();
if (process.env.APPWRITE_ENDPOINT) {
    appwriteClient.setEndpoint(process.env.APPWRITE_ENDPOINT);
}
if (process.env.APPWRITE_PROJECT_ID) {
    appwriteClient.setProject(process.env.APPWRITE_PROJECT_ID);
}
if (process.env.APPWRITE_API_KEY) {
    appwriteClient.setKey(process.env.APPWRITE_API_KEY);
}
const appwriteStorage = new Storage(appwriteClient);

/**
 * Appwrite file IDs are restricted: max 36 chars, alphanumeric, hyphens, periods, underscores.
 * S3 style paths contain "/" and can exceed 36 chars.
 * To ensure safe mapping, we generate an MD5 hash of the key to use as the Appwrite File ID.
 */
const getAppwriteFileId = (key: string): string => {
    return crypto.createHash("md5").update(key).digest("hex");
};

/**
 * Uploads a file (buffer, stream, or path) to either MinIO (S3) or Appwrite based on STORAGE_PROVIDER
 */
export const uploadFile = async (
    bucketName: string,
    key: string,
    file: any
): Promise<string> => {
    const bucketId = STORAGE_PROVIDER === "appwrite"
        ? (process.env.APPWRITE_BUCKET_ID || bucketName)
        : bucketName;

    if (STORAGE_PROVIDER === "appwrite") {
        let buffer: Buffer;
        if (file.buffer) {
            buffer = file.buffer;
        } else if (file.path) {
            buffer = fs.readFileSync(file.path);
        } else if (Buffer.isBuffer(file)) {
            buffer = file;
        } else {
            throw new Error("Invalid file format for Appwrite upload");
        }

        const appwriteFile = new File([buffer as any], key.split("/").pop() || "file");
        await appwriteStorage.createFile(bucketId, getAppwriteFileId(key), appwriteFile as any);
        return key;
    } else {
        const fileBody = file.buffer ? file.buffer : (file.path ? fs.createReadStream(file.path) : file);
        const mimeType = file.mimetype || "application/octet-stream";

        await s3Client.send(new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: fileBody,
            ContentType: mimeType,
        }));
        return key;
    }
};

/**
 * Deletes a file from either MinIO (S3) or Appwrite based on STORAGE_PROVIDER
 */
export const deleteFile = async (bucketName: string, key: string): Promise<void> => {
    const bucketId = STORAGE_PROVIDER === "appwrite"
        ? (process.env.APPWRITE_BUCKET_ID || bucketName)
        : bucketName;

    if (STORAGE_PROVIDER === "appwrite") {
        const fileId = getAppwriteFileId(key);
        await appwriteStorage.deleteFile(bucketId, fileId);
    } else {
        await s3Client.send(new DeleteObjectCommand({
            Bucket: bucketName,
            Key: key,
        }));
    }
};

/**
 * Retrieves file binary and metadata from either MinIO (S3) or Appwrite based on STORAGE_PROVIDER
 */
export const getFile = async (
    bucketName: string,
    key: string
): Promise<{ body: any; contentType: string }> => {
    const bucketId = STORAGE_PROVIDER === "appwrite"
        ? (process.env.APPWRITE_BUCKET_ID || bucketName)
        : bucketName;

    if (STORAGE_PROVIDER === "appwrite") {
        const fileId = getAppwriteFileId(key);
        const metadata = await appwriteStorage.getFile(bucketId, fileId);
        const buffer = await appwriteStorage.getFileDownload(bucketId, fileId);
        return {
            body: buffer,
            contentType: metadata.mimeType || "application/octet-stream",
        };
    } else {
        const response = await s3Client.send(new GetObjectCommand({
            Bucket: bucketName,
            Key: key,
        }));
        return {
            body: response.Body,
            contentType: response.ContentType || "application/octet-stream",
        };
    }
};
