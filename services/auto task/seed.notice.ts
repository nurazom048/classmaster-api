// seed.notice.ts
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { s3Client } from '../storage/storage.mino.s3';
import prisma from '../../prisma/schema/prisma.clint';
// হেল্পার ফাইল থেকে ইমপোর্ট করা হলো (পাথ আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী সেট করবেন)
import {
    extractImages,
    optimizeImageUrl,
    createPdfFromImages,
    generateDynamicDescription
} from './autotask.helper';

const FEED_URL = "https://fearyourcreatorndonotwasteothersright.blogspot.com/feeds/posts/default?alt=json&published-min=2026-01-01T00:00:00&published-max=2026-12-31T23:59:59";
const TARGET_USER_ID = "6a45307892c37c968aebb618";

export interface NoticeData {
    title: string;
    time: string;
    imageUrls: string[];
}

// Core Logic: Fetches and filters the data
async function fetchRecentNotices(): Promise<NoticeData[]> {
    try {
        const response = await fetch(FEED_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        if (!data.feed || !data.feed.entry) return [];

        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - (60 * 60 * 1000));

        const recentEntries = data.feed.entry.filter((entry: any) => {
            const publishedDate = new Date(entry.published.$t);
            return publishedDate >= oneHourAgo && publishedDate <= now;
        });

        return recentEntries.map((notice: any) => {
            const rawContent = notice.content?.$t || '';
            const allImages = extractImages(rawContent); // হেল্পার দিয়ে ইমেজ বের করা

            if (allImages.length === 0 && notice['media$thumbnail']?.url) {
                allImages.push(optimizeImageUrl(notice['media$thumbnail'].url));
            }

            return {
                title: notice.title?.$t || 'No Title',
                time: notice.published?.$t || 'No Time',
                imageUrls: allImages
                // ডেসক্রিপশন প্রপার্টি রিমুভ করে দিয়েছি কারণ আমরা সোর্সের ডেসক্রিপশন আর নিচ্ছি না
            };
        });

    } catch (error) {
        console.error("Failed to fetch notices:", error);
        return [];
    }
}

// Processing Logic: Auto upload new notices
async function autoNoticeUpload() {
    console.log(`\n[${new Date().toLocaleTimeString()}] Checking for new notices to upload...`);

    try {
        const publisherAccount = await prisma.account.findUnique({
            where: { id: TARGET_USER_ID }
        });

        if (!publisherAccount) {
            console.error(`Publisher account with ID '${TARGET_USER_ID}' not found in database. Skipping.`);
            return;
        }

        const notices = await fetchRecentNotices();
        if (notices.length === 0) {
            console.log("No new notices found in the last hour.");
            return;
        }

        for (const notice of notices) {
            // Prevent Duplicate uploads
            const existingNotice = await prisma.notice.findFirst({
                where: {
                    title: notice.title,
                    publisherId: publisherAccount.id
                }
            });

            if (existingNotice) {
                console.log(`Skipping duplicate notice: "${notice.title}"`);
                continue;
            }

            console.log(`Processing new notice: "${notice.title}"`);

            const accountIdentifier = (publisherAccount as any).username || publisherAccount.name || "ClassMaster";
            const finalDescription = generateDynamicDescription(notice.title, accountIdentifier);

            // এই ফাংশনটি এখন অল ইমেজ ইউআরএল (যেমন: ৪টি ইমেজ) রিসিভ করে একটি ৪ পেইজের পিডিএফ তৈরি করবে।
            const pdfBuffer = await createPdfFromImages(notice.imageUrls, finalDescription);
            // Upload generated PDF directly to your MinIO / S3 Bucket
            const uuid = uuidv4();
            const fileName = `notices/academyId-${publisherAccount.id}/uid-${uuid}-auto-notice.pdf`;

            const uploadParams = {
                Bucket: "storageforclassmaster",
                Key: fileName,
                Body: pdfBuffer,
                ContentType: "application/pdf",
            };

            await s3Client.send(new PutObjectCommand(uploadParams));

            // Create the DB record in Prisma
            await prisma.notice.create({
                data: {
                    title: notice.title,
                    description: finalDescription,
                    publisherId: publisherAccount.id,
                    pdf: fileName,
                },
            });

            console.log(`Successfully uploaded and saved: "${notice.title}"`);
        }

    } catch (error) {
        console.error("Error during auto upload process:", error);
    }
}

/**
 * EXPORTED INITIALIZER
 */
export const autoSeedInitialize = () => {
    console.log("Starting the Auto-Seed Notice Fetcher service...");

    // Run immediately on boot
    autoNoticeUpload();

    // Loop every 10 minutes
    const TWO_MINUTES_MS = 1 * 60 * 1000;
    setInterval(autoNoticeUpload, TWO_MINUTES_MS);
};