// Features/JobCircular/routes/job_circular_route.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../../../prisma/schema/prisma.clint';
import {
    textToQuillDelta,
    createPdfFromImages,
    optimizeImageUrl
} from '../../../services/auto task/autotask.helper';
import { uploadFile, BUCKET_NAME, storage } from '../../../services/storage/storage';
import { getAutoNoticeFilePath } from '../../../services/storage/storage.path';
import { StorageProvider } from '../../../utils/enums';

const router = express.Router();

// Hardcoded Publisher Account ID
const TARGET_USER_ID = process.env.JOB_CIRCULAR_ACCOUNT_ID || "6a45307892c37c968aebb618";

interface BatchProgress {
    total: number;
    processed: number;
    created: number;
    duplicates_skipped: number;
    failed: number;
    skippedTitles: string[];
    createdTitles: string[];
    errors: string[];
    isRunning: boolean;
    startedAt: string;
    completedAt?: string;
}

let latestProgress: BatchProgress = {
    total: 0,
    processed: 0,
    created: 0,
    duplicates_skipped: 0,
    failed: 0,
    skippedTitles: [],
    createdTitles: [],
    errors: [],
    isRunning: false,
    startedAt: new Date().toISOString()
};

function isPdfUrl(url: string): boolean {
    if (!url || typeof url !== 'string') return false;
    const clean = url.split('?')[0].toLowerCase();
    return clean.endsWith('.pdf');
}

function isImageUrl(url: string): boolean {
    if (!url || typeof url !== 'string') return false;
    const clean = url.split('?')[0].toLowerCase();
    return clean.endsWith('.jpg') || clean.endsWith('.jpeg') || clean.endsWith('.png') ||
           clean.endsWith('.webp') || clean.endsWith('.gif') || clean.endsWith('.bmp') ||
           url.includes('googleusercontent.com') || url.includes('bp.blogspot.com') ||
           url.includes('blogger.com');
}

async function downloadPdfBuffer(url: string): Promise<Buffer> {
    const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: 45000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    return Buffer.from(response.data);
}

async function uploadPdfToStorage(pdfBuffer: Buffer, publisherId: string): Promise<string> {
    const uuid = uuidv4();
    const fileName = getAutoNoticeFilePath(publisherId, uuid);

    try {
        await uploadFile(BUCKET_NAME, fileName, {
            buffer: pdfBuffer,
            mimetype: "application/pdf"
        }, StorageProvider.MINIO);
        return fileName;
    } catch (err: any) {
        console.warn(`[JobCircular] MinIO upload failed (${err.message}), falling back to default storage (${storage})...`);
        await uploadFile(BUCKET_NAME, fileName, {
            buffer: pdfBuffer,
            mimetype: "application/pdf"
        });
        return fileName;
    }
}

async function processMediaAndGetFileName(job: any, publisherId: string, descriptionText: string): Promise<string | null> {
    const rawPdf = job.pdf;
    const rawUrls: string[] = (Array.isArray(rawPdf) ? rawPdf : (rawPdf ? [rawPdf] : [])).filter(Boolean);

    if (Array.isArray(job.imageUrls)) {
        rawUrls.push(...job.imageUrls.filter(Boolean));
    }

    if (rawUrls.length === 0) {
        return null;
    }

    // 1. If explicitly a PDF link
    if (isPdfUrl(rawUrls[0])) {
        try {
            console.log(`[JobCircular] Downloading PDF: ${rawUrls[0]}`);
            const buffer = await downloadPdfBuffer(rawUrls[0]);
            const uploadedKey = await uploadPdfToStorage(buffer, publisherId);
            return uploadedKey;
        } catch (pdfErr: any) {
            console.error(`[JobCircular] Failed to download PDF (${rawUrls[0]}):`, pdfErr.message);
            return null;
        }
    }

    // 2. If image links exist
    const imageUrls = rawUrls.filter(isImageUrl).map(optimizeImageUrl);
    if (imageUrls.length > 0) {
        try {
            console.log(`[JobCircular] Converting ${imageUrls.length} image(s) to PDF via createPdfFromImages...`);
            const pdfBuffer = await createPdfFromImages(imageUrls, descriptionText);
            const uploadedKey = await uploadPdfToStorage(pdfBuffer, publisherId);
            return uploadedKey;
        } catch (imgErr: any) {
            console.error(`[JobCircular] Failed to convert images to PDF:`, imgErr.message);
            return null;
        }
    }

    // 3. Fallback: If URL looks like a generic web link, attempt to fetch buffer
    if (rawUrls[0].startsWith('http')) {
        try {
            console.log(`[JobCircular] Attempting generic fetch for: ${rawUrls[0]}`);
            const buffer = await downloadPdfBuffer(rawUrls[0]);
            const uploadedKey = await uploadPdfToStorage(buffer, publisherId);
            return uploadedKey;
        } catch {
            return null;
        }
    }

    return null;
}

async function executeJobProcessing(jobs: any[], publisherId: string) {
    latestProgress = {
        total: jobs.length,
        processed: 0,
        created: 0,
        duplicates_skipped: 0,
        failed: 0,
        skippedTitles: [],
        createdTitles: [],
        errors: [],
        isRunning: true,
        startedAt: new Date().toISOString()
    };

    console.log(`[JobCircular] Starting batch process for ${jobs.length} jobs (Publisher ID: ${publisherId})`);

    for (const job of jobs) {
        try {
            if (!job?.title) {
                latestProgress.processed++;
                continue;
            }

            const trimmedTitle = String(job.title).trim();

            // 1. Deduplication check
            const exists = await prisma.notice.findFirst({
                where: {
                    title: trimmedTitle,
                    publisherId: publisherId
                }
            });

            if (exists) {
                console.log(`[JobCircular] Duplicate skipped: "${trimmedTitle}"`);
                latestProgress.duplicates_skipped++;
                latestProgress.skippedTitles.push(trimmedTitle);
                continue;
            }

            // 2. Format description text
            const pdfs: string[] = (Array.isArray(job.pdf) ? job.pdf : (job.pdf ? [job.pdf] : [])).filter(Boolean);
            const extra = pdfs.slice(1).map((u, i) => `আরও লিংক ${i + 2}: ${u}`);
            const text = [
                job.description || '',
                job.details_page ? `বিস্তারিত: ${job.details_page}` : '',
                job.pdf_note || '',
                ...extra,
            ].filter(Boolean).join('\n\n');

            // 3. Media Processing (PDF download or Image-to-PDF conversion, then MinIO upload)
            const storagePdfKey = await processMediaAndGetFileName(job, publisherId, text);

            // 4. Save Notice in Database
            await prisma.notice.create({
                data: {
                    title: trimmedTitle,
                    description: textToQuillDelta(text) as any,
                    publisherId: publisherId,
                    pdf: storagePdfKey,
                    category: 'job_circular',
                },
            });

            latestProgress.created++;
            latestProgress.createdTitles.push(trimmedTitle);
            console.log(`[JobCircular] Created Notice: "${trimmedTitle}" (PDF: ${storagePdfKey || 'none'})`);
        } catch (jobErr: any) {
            console.error(`[JobCircular] Error processing job "${job?.title}":`, jobErr);
            latestProgress.failed++;
            latestProgress.errors.push(`${job?.title}: ${jobErr.message}`);
        } finally {
            latestProgress.processed++;
        }
    }

    latestProgress.isRunning = false;
    latestProgress.completedAt = new Date().toISOString();
    console.log(`[JobCircular] Batch completed. Created: ${latestProgress.created}, Skipped: ${latestProgress.duplicates_skipped}, Failed: ${latestProgress.failed}`);
}

// ---------- পেস্ট করার পেজ (Public HTML Interface) ----------
router.get('/', (_req: Request, res: Response) => {
    res.type('html').send(`<!doctype html>
<html lang="bn">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Job Circular অটো-পোস্ট</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 24px auto; padding: 0 16px; background: #fafafa; color: #222; }
    .card { background: #fff; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #eaeaea; }
    h2 { margin-top: 0; color: #1e293b; display: flex; align-items: center; gap: 8px; }
    p { color: #64748b; font-size: 14px; margin-bottom: 16px; }
    textarea { width: 100%; height: 320px; font-family: monospace; font-size: 13px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; resize: vertical; outline: none; }
    textarea:focus { border-color: #3b82f6; ring: 2px solid #bfdbfe; }
    button { background: #2563eb; color: #fff; border: none; padding: 12px 20px; font-size: 16px; font-weight: 600; border-radius: 8px; cursor: pointer; width: 100%; margin-top: 12px; transition: background 0.2s; }
    button:hover { background: #1d4ed8; }
    button:disabled { background: #94a3b8; cursor: not-allowed; }
    pre { background: #0f172a; color: #e2e8f0; padding: 16px; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; font-size: 13px; min-height: 80px; }
    .badge { display: inline-block; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: bold; background: #e0f2fe; color: #0369a1; }
  </style>
</head>
<body>
  <div class="card">
    <h2>💼 Job Circular পোস্ট করুন <span class="badge">পাবলিক মোড</span></h2>
    <p>JSON পেস্ট করে বাটনে চাপুন। পিডিএফ ফাইল সরাসরি ডাউনলোড হয়ে মিনিওতে আপলোড হবে, অথবা ইমেজ থাকলে স্বয়ংক্রিয়ভাবে পিডিএফে রূপান্তর হয়ে নোটিশ তৈরি হবে।</p>
    <textarea id="json" placeholder='{"jobs":[{"title":"...","description":"...","pdf":"https://...pdf"}]}'></textarea>
    <button id="btn" onclick="send()">পোস্ট করুন</button>
    <h3 style="margin-top: 20px; font-size: 15px;">প্রসেসিং স্ট্যাটাস:</h3>
    <pre id="out">অপেক্ষমান...</pre>
  </div>

  <script>
    let pollInterval = null;

    async function send() {
      const btn = document.getElementById('btn');
      const out = document.getElementById('out');
      const jsonText = document.getElementById('json').value.trim();

      if (!jsonText) {
        alert('অনুগ্রহ করে JSON পেস্ট করুন');
        return;
      }

      let body;
      try {
        body = JSON.parse(jsonText);
      } catch (e) {
        out.textContent = '❌ JSON ফরম্যাট ভুল: ' + e.message;
        return;
      }

      btn.disabled = true;
      out.textContent = '⏳ সার্ভারে পাঠানো হচ্ছে এবং ব্যাকগ্রাউন্ড প্রসেসিং শুরু হচ্ছে...';

      try {
        const r = await fetch(location.pathname, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        const res = await r.json();
        out.textContent = JSON.stringify(res, null, 2);

        // স্ট্যাটাস পোলিং শুরু
        if (pollInterval) clearInterval(pollInterval);
        pollInterval = setInterval(checkStatus, 2000);
      } catch (e) {
        out.textContent = '❌ ত্রুটি: ' + e.message;
        btn.disabled = false;
      }
    }

    async function checkStatus() {
      try {
        const r = await fetch(location.pathname + '/status');
        const data = await r.json();
        const out = document.getElementById('out');
        const btn = document.getElementById('btn');

        out.textContent = '📊 লাইভ প্রসেসিং স্ট্যাটাস:\n' + JSON.stringify(data, null, 2);

        if (!data.isRunning) {
          clearInterval(pollInterval);
          btn.disabled = false;
        }
      } catch (e) {
        console.error('Status fetch error:', e);
      }
    }
  </script>
</body>
</html>`);
});

// ---------- লাইভ স্ট্যাটাস চেক ----------
router.get('/status', (_req: Request, res: Response) => {
    res.json(latestProgress);
});

// ---------- JSON গ্রহণ ও প্রসেসিং ----------
router.post('/', async (req: Request, res: Response) => {
    try {
        const body: any = req.body;
        const jobs: any[] = Array.isArray(body) ? body : body?.jobs;

        if (!Array.isArray(jobs) || jobs.length === 0) {
            return res.status(400).json({ message: '"jobs" অ্যারে পাওয়া যায়নি অথবা খালি' });
        }

        const account = await prisma.account.findUnique({
            where: { id: TARGET_USER_ID }
        });

        if (!account) {
            return res.status(500).json({
                message: `টার্গেট পাবলিশার অ্যাকাউন্ট ID (${TARGET_USER_ID}) ডাটাবেসে পাওয়া যায়নি।`
            });
        }

        // Check if caller wants synchronous execution via ?sync=true
        if (req.query.sync === 'true') {
            await executeJobProcessing(jobs, TARGET_USER_ID);
            return res.json({
                message: 'প্রসেসিং সফলভাবে সম্পন্ন হয়েছে',
                ...latestProgress
            });
        }

        // Default: asynchronous background execution for instant HTTP response
        executeJobProcessing(jobs, TARGET_USER_ID).catch(err => {
            console.error('[JobCircular] Unhandled error in batch process:', err);
        });

        res.status(202).json({
            message: 'বিজ্ঞপ্তি গ্রহণ করা হয়েছে! ব্যাকগ্রাউন্ডে পিডিএফ/ইমেজ ডাউনলোড, মিনিওতে আপলোড এবং নোটিশ তৈরি শুরু হয়েছে।',
            total: jobs.length,
            publisher: account.name || account.username || TARGET_USER_ID,
            statusEndpoint: '/bot/jobcircular/status'
        });

    } catch (e: any) {
        console.error('[JobCircular]', e);
        res.status(500).json({ message: e.message });
    }
});

export default router;
