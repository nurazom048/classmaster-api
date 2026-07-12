import axios from 'axios';
import * as cheerio from 'cheerio';
import https from 'https';
import prisma from '../../../prisma/schema/prisma.clint';
import { generateDynamicDescription } from '../autotask.helper';

// Hardcoded Target Account ID for publishing the notices
const TARGET_USER_ID = "6a45307892c37c968aebb618";

// SSL check bypass agent for scraping portals with self-signed/expired certificates
const agent = new https.Agent({
    rejectUnauthorized: false
});

export interface ScrapedNotice {
    siteurl: string;
    title: string;
    description: string;
    upload_date: string;
    archive_date: string;
    category: string;
    pdf_download_url: string;
}

/**
 * Scrapes notices from the given polytechnic portal URL
 * @param {string} url - Base URL of the polytechnic website
 * @returns {Promise<ScrapedNotice[]>} - Array of scraped notices
 */
export async function politechnnicIntitueNoticeFatch(url: string): Promise<ScrapedNotice[]> {
    try {
        const response = await axios.get(url, { httpsAgent: agent });
        const $ = cheerio.load(response.data);

        const links: string[] = [];

        // Step 1: Collect up to latest 10 notice links from the homepage notice links
        $('a.notice-link').each((index, element) => {
            const href = $(element).attr('href');
            if (href && href.includes('/notices/')) {
                const fullUrl = href.startsWith('http') ? href : url + href;
                if (!links.includes(fullUrl) && links.length < 10) {
                    links.push(fullUrl);
                }
            }
        });

        const scrapedData: ScrapedNotice[] = [];

        // Step 2: Scrape details from each collected notice page link
        for (const link of links) {
            try {
                const res = await axios.get(link, { httpsAgent: agent });
                const page$ = cheerio.load(res.data);

                // 1. Title Extraction
                let title = "Title not found";
                const titleElement = page$('div.title-with-image-content-widget h2');
                if (titleElement.length > 0) {
                    title = titleElement.text().trim();
                }

                // 2. Date and Category Extraction
                let category = "নোটিশ";
                let upload_date = "";
                let archive_date = "";

                page$('span.basic-chip').each((i, el) => {
                    const chipText = page$(el).text().trim();
                    if (chipText.includes("কন্টেন্ট:")) {
                        category = chipText.split(":").pop()?.trim() || "নোটিশ";
                    } else if (chipText.includes("প্রকাশের তারিখ:")) {
                        upload_date = chipText.split(":").pop()?.trim() || "";
                    } else if (chipText.includes("আর্কাইভ তারিখ:")) {
                        archive_date = chipText.split(":").pop()?.trim() || "";
                    }
                });

                // 3. Description Extraction
                let description = "";
                const contentBody = page$('rt-renderer').text().trim();
                if (contentBody) {
                    description = contentBody.replace(/\s+/g, ' ');
                } else {
                    const paragraphs = page$('div.title-with-image-content-widget p:not(.chips)');
                    if (paragraphs.length > 0) {
                        description = paragraphs.text().replace(/\s+/g, ' ').trim();
                    }
                }

                if (!description || description.length < 5) {
                    description = "বিস্তারিত কোনো বর্ণনা নেই, নোটিশের পিডিএফটি দেখুন।";
                }

                // 4. PDF URL Extraction
                let pdf_url = "";
                const pdfObject = page$('object[type="application/pdf"]');
                if (pdfObject.length > 0 && pdfObject.attr('data')) {
                    pdf_url = pdfObject.attr('data') || "";
                } else {
                    const pdfAnchor = page$('a[download]');
                    if (pdfAnchor.length > 0 && pdfAnchor.attr('href')) {
                        pdf_url = pdfAnchor.attr('href') || "";
                    }
                }

                // Make sure we have the full absolute URL for the PDF
                if (pdf_url && !pdf_url.startsWith('http')) {
                    const domain = new URL(link).origin;
                    pdf_url = domain + (pdf_url.startsWith('/') ? '' : '/') + pdf_url;
                }

                // Add to scraped data array
                scrapedData.push({
                    siteurl: link,
                    title: title,
                    description: description,
                    upload_date: upload_date,
                    archive_date: archive_date,
                    category: category,
                    pdf_download_url: pdf_url
                });

                // 1 second delay between requests to not overload the polytechnic server
                await new Promise(resolve => setTimeout(resolve, 1000));

            } catch (err: any) {
                console.error(`Error scraping detail page ${link}: ${err.message}`);
            }
        }

        return scrapedData;

    } catch (error: any) {
        console.error("Could not fetch the main portal website. Error:", error.message);
        return [];
    }
}

/**
 * Helper: Categorize notice based on keywords
 */
function getNoticeCategory(title: string): "job_circular" | "notice" | "result" | "other" {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('ফলাফল') || lowerTitle.includes('রেজাল্ট') || lowerTitle.includes('result')) {
        return 'result';
    }
    if (lowerTitle.includes('নিয়োগ') || lowerTitle.includes('সার্কুলার') || lowerTitle.includes('বিজ্ঞপ্তি') || lowerTitle.includes('circular')) {
        return 'job_circular';
    }
    if (lowerTitle.includes('নোটিশ') || lowerTitle.includes('notice')) {
        return 'notice';
    }
    return 'other';
}

/**
 * Processing Logic: Auto upload new notices.
 * Scrapes, checks duplicates, and inserts directly to the database.
 */
async function autoNoticeUpload() {
    console.log(`\n[${new Date().toLocaleTimeString()}] Checking for new Polytechnic notices to upload...`);

    try {
        // Fetch target publisher account from database
        const publisherAccount = await prisma.account.findUnique({
            where: { id: TARGET_USER_ID }
        });

        if (!publisherAccount) {
            console.error(`Publisher account with ID '${TARGET_USER_ID}' not found in database. Skipping.`);
            return;
        }

        // Scrape the last 10 notices from Khulna Polytechnic portal
        const portal = 'https://dhaka.polytech.gov.bd/';
        console.log(`Scraping latest notices from portal: ${portal}`);

        const notices = await politechnnicIntitueNoticeFatch(portal);
        if (notices.length === 0) {
            console.log("No notices scraped or fetched from portal.");
            return;
        }

        for (const notice of notices) {
            // Prevent duplicate uploads by matching title & publisherId
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

            const accountIdentifier = publisherAccount.username || publisherAccount.name || "ClassMaster";
            const finalDescription = generateDynamicDescription(notice.title, accountIdentifier);

            // Save the notice record directly to the database.
            // Using the direct, absolute download PDF URL directly (no local PDF creation or S3 upload needed)
            await prisma.notice.create({
                data: {
                    title: notice.title,
                    description: finalDescription,
                    publisherId: publisherAccount.id,
                    pdf: notice.pdf_download_url || null,
                    category: getNoticeCategory(notice.title),
                },
            });

            console.log(`Successfully uploaded and saved: "${notice.title}"`);
        }

    } catch (error: any) {
        console.error("Error during auto upload process:", error.message);
    }
}

/**
 * EXPORTED INITIALIZER
 * Kicks off the background task immediately on startup, then runs every 20 minutes.
 */
export const startPolytechnicNoticeFetcher = () => {
    console.log("Starting the Polytechnic Institute Notice Fetcher service...");

    // Run immediately on boot
    autoNoticeUpload();

    // Loop every 20 minutes (20 * 60 * 1000 ms)
    const TWENTY_MINUTES_MS = 60 * 60 * 1000;
    setInterval(autoNoticeUpload, TWENTY_MINUTES_MS);
};