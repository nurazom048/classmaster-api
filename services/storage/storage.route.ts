import { Router, Request, Response } from "express";
import { getCache, uploadCache } from "./config/cache.appwrite";
import { getFile, BUCKET_NAME } from "./storage";

const router = Router();

/**
 * Storage File Retrieval Route with Appwrite Cache integration
 * Path: GET /storage/:bucket/:key(*)
 * Reduces Cloudflare R2 Class B read operations by checking Appwrite cache first
 */
router.get("/:bucket/:key(*)", async (req: Request, res: Response) => {
  try {
    const bucket = req.params.bucket as string;
    const key = req.params.key as string;

    // 1. Check Appwrite Cache first (Saves R2 Class B Read Operation)
    const cachedFile = await getCache(key);
    if (cachedFile && cachedFile.body) {
      res.setHeader("Content-Type", cachedFile.contentType || "application/octet-stream");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.setHeader("Content-Disposition", "inline");
      res.setHeader("X-Cache-Status", "HIT-APPWRITE");
      return res.send(cachedFile.body);
    }

    // 2. Cache MISS: Fetch from Cloudflare R2
    let fileData;
    const bucketCandidates = Array.from(
      new Set([bucket, BUCKET_NAME, "classmaster-storage", "strogeforclassmaster", "storageforclassmaster", "stroageforclassmaster"].filter(Boolean))
    );

    let lastError: any = null;
    for (const currentBucket of bucketCandidates) {
      try {
        fileData = await getFile(currentBucket, key);
        break;
      } catch (err: any) {
        lastError = err;
      }
    }

    if (!fileData) {
      throw lastError || new Error("NoSuchKey");
    }

    res.setHeader("Content-Type", fileData.contentType);
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Content-Disposition", "inline");
    res.setHeader("X-Cache-Status", "MISS-R2");

    // 3. Process response & upload to Appwrite Cache asynchronously
    if (Buffer.isBuffer(fileData.body)) {
      res.send(fileData.body);
      uploadCache(key, fileData.body, fileData.contentType).catch((err) => {
        console.error("❌ Failed to background cache file to Appwrite:", err.message);
      });
    } else if (fileData.body && typeof fileData.body.pipe === "function") {
      const chunks: Uint8Array[] = [];
      fileData.body.on("data", (chunk: Uint8Array) => chunks.push(chunk));
      fileData.body.on("end", () => {
        const buffer = Buffer.concat(chunks);
        if (!res.headersSent) {
          res.send(buffer);
        }
        // Upload to Appwrite Cache after fetching from R2
        uploadCache(key, buffer, fileData.contentType).catch((err) => {
          console.error("❌ Failed to background cache file to Appwrite:", err.message);
        });
      });
      fileData.body.on("error", (err: any) => {
        if (!res.headersSent) {
          res.status(500).json({ message: "Error streaming file from storage" });
        }
      });
    } else {
      res.status(404).json({ message: "File content is empty" });
    }
  } catch (error: any) {
    const isNotFound =
      error?.Code === "NoSuchKey" ||
      error?.name === "NoSuchKey" ||
      error?.$metadata?.httpStatusCode === 404;
    if (isNotFound) {
      return res.status(404).json({ message: "File not found" });
    }
    console.error("❌ Storage File Error:", error);
    res.status(500).json({ message: "Storage service error" });
  }
});

export default router;
