import cron from 'node-cron';
import prisma from '../../prisma/schema/prisma.clint';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '../storage/storage.mino.s3';

const BUCKET_NAME = 'storageforclassmaster';

/**
 * Starts the daily cron job to delete summaries and associated MinIO files older than 120 days.
 */
export function startSummaryCleanerCron() {
  console.log("🧹 Initializing 120-Day Auto-Delete Cron Job...");
  
  // Runs daily at midnight (00:00)
  cron.schedule('0 0 * * *', async () => {
    console.log("🧹 Running daily 120-Day Auto-Delete Cron Job...");
    try {
      const cutOffDate = new Date();
      cutOffDate.setDate(cutOffDate.getDate() - 120);

      // Find summaries created more than 120 days ago
      const expiredSummaries = await prisma.summary.findMany({
        where: {
          createdAt: {
            lt: cutOffDate
          }
        }
      });

      if (expiredSummaries.length === 0) {
        console.log("🧹 No expired summaries found to clean up.");
        return;
      }

      console.log(`🧹 Found ${expiredSummaries.length} expired summaries. Cleaning files and records...`);

      for (const summary of expiredSummaries) {
        // Delete each associated file from MinIO storage
        if (summary.imageLinks && summary.imageLinks.length > 0) {
          for (const key of summary.imageLinks) {
            try {
              await s3Client.send(new DeleteObjectCommand({
                Bucket: BUCKET_NAME,
                Key: key
              }));
              console.log(`🗑️ Deleted file from MinIO: ${key}`);
            } catch (err: any) {
              console.error(`❌ Failed to delete file ${key} from MinIO:`, err.message);
            }
          }
        }

        // Delete from the database
        await prisma.summary.delete({
          where: {
            id: summary.id
          }
        });
        console.log(`🗑️ Deleted expired summary record ID: ${summary.id}`);
      }

      console.log("🧹 Expired summaries cleaning completed successfully.");
    } catch (error: any) {
      console.error("❌ Error in 120-Day Auto-Delete Cron Job:", error.message);
    }
  });
}
