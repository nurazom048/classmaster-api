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

interface BatchLog {
    time: string;
    type: 'info' | 'success' | 'warn' | 'error';
    message: string;
}

interface BatchProgress {
    total: number;
    processed: number;
    created: number;
    duplicates_skipped: number;
    failed: number;
    percent: number;
    currentStep: string;
    logs: BatchLog[];
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
    percent: 0,
    currentStep: 'অপেক্ষমান...',
    logs: [],
    skippedTitles: [],
    createdTitles: [],
    errors: [],
    isRunning: false,
    startedAt: new Date().toISOString()
};

function addLog(type: 'info' | 'success' | 'warn' | 'error', message: string) {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    latestProgress.logs.push({ time, type, message });
    // Keep max 100 recent logs
    if (latestProgress.logs.length > 100) {
        latestProgress.logs.shift();
    }
}

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
        console.warn(`[JobCircular] MinIO upload fallback to ${storage}: ${err.message}`);
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

    // 1. PDF Direct link
    if (isPdfUrl(rawUrls[0])) {
        try {
            addLog('info', `📥 পিডিএফ ডাউনলোড করা হচ্ছে... (${rawUrls[0].slice(0, 70)}...)`);
            const buffer = await downloadPdfBuffer(rawUrls[0]);
            addLog('info', `☁️ পিডিএফ স্টোরেজে আপলোড করা হচ্ছে...`);
            const uploadedKey = await uploadPdfToStorage(buffer, publisherId);
            addLog('success', `✅ পিডিএফ স্টোরেজে সংরক্ষিত: ${uploadedKey}`);
            return uploadedKey;
        } catch (pdfErr: any) {
            addLog('warn', `⚠️ পিডিএফ ডাউনলোড ব্যর্থ (${pdfErr.message}), পিডিএফ ছাড়াই সেভ করা হবে`);
            return null;
        }
    }

    // 2. Images converted to PDF
    const imageUrls = rawUrls.filter(isImageUrl).map(optimizeImageUrl);
    if (imageUrls.length > 0) {
        try {
            addLog('info', `🖼️ ${imageUrls.length}টি ইমেজ পাওয়া গেছে, পিডিএফে রূপান্তর করা হচ্ছে...`);
            const pdfBuffer = await createPdfFromImages(imageUrls, descriptionText);
            addLog('info', `☁️ তৈরি হওয়া পিডিএফ ক্লাউডে আপলোড করা হচ্ছে...`);
            const uploadedKey = await uploadPdfToStorage(pdfBuffer, publisherId);
            addLog('success', `✅ কনভার্ট করা পিডিএফ স্টোরেজে সংরক্ষিত: ${uploadedKey}`);
            return uploadedKey;
        } catch (imgErr: any) {
            addLog('warn', `⚠️ ইমেজ টু পিডিএফ ব্যর্থ (${imgErr.message}), ইমেজ ছাড়া সেভ হবে`);
            return null;
        }
    }

    // 3. Generic web URL
    if (rawUrls[0].startsWith('http')) {
        try {
            addLog('info', `📥 মিডিয়া ফাইল ডাউনলোড করা হচ্ছে...`);
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
        percent: 0,
        currentStep: 'প্রসেসিং শুরু হচ্ছে...',
        logs: [],
        skippedTitles: [],
        createdTitles: [],
        errors: [],
        isRunning: true,
        startedAt: new Date().toISOString()
    };

    addLog('info', `🚀 মোট ${jobs.length}টি বিজ্ঞপ্তির প্রসেসিং শুরু হয়েছে...`);

    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        const jobIndex = i + 1;

        try {
            if (!job?.title) {
                latestProgress.processed++;
                latestProgress.percent = Math.round((latestProgress.processed / latestProgress.total) * 100);
                continue;
            }

            const trimmedTitle = String(job.title).trim();
            latestProgress.currentStep = `[${jobIndex}/${jobs.length}] ডুপ্লিকেট চেক করা হচ্ছে: "${trimmedTitle.slice(0, 40)}..."`;
            addLog('info', `🔍 [${jobIndex}/${jobs.length}] ম্যাচিং চেক চলছে: "${trimmedTitle}"`);

            // 1. Deduplication check
            const exists = await prisma.notice.findFirst({
                where: {
                    title: trimmedTitle,
                    publisherId: publisherId
                }
            });

            if (exists) {
                latestProgress.duplicates_skipped++;
                latestProgress.skippedTitles.push(trimmedTitle);
                addLog('warn', `⏩ ডুপ্লিকেট পাওয়া গেছে! স্কিপ করা হলো: "${trimmedTitle}"`);
                latestProgress.processed++;
                latestProgress.percent = Math.round((latestProgress.processed / latestProgress.total) * 100);
                continue;
            }

            addLog('success', `✨ নতুন বিজ্ঞপ্তি পাওয়া গেছে! তৈরির কাজ চলছে: "${trimmedTitle}"`);

            // 2. Format description
            const pdfs: string[] = (Array.isArray(job.pdf) ? job.pdf : (job.pdf ? [job.pdf] : [])).filter(Boolean);
            const extra = pdfs.slice(1).map((u, idx) => `আরও লিংক ${idx + 2}: ${u}`);
            const text = [
                job.description || '',
                job.details_page ? `বিস্তারিত: ${job.details_page}` : '',
                job.pdf_note || '',
                ...extra,
            ].filter(Boolean).join('\n\n');

            // 3. Process media
            latestProgress.currentStep = `[${jobIndex}/${jobs.length}] ফাইল প্রসেস ও আপলোড হচ্ছে: "${trimmedTitle.slice(0, 40)}..."`;
            const storagePdfKey = await processMediaAndGetFileName(job, publisherId, text);

            // 4. Create Notice
            latestProgress.currentStep = `[${jobIndex}/${jobs.length}] ডাটাবেসে সেভ হচ্ছে...`;
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
            addLog('success', `🎉 সফলভাবে পোস্ট হয়েছে: "${trimmedTitle}"`);
        } catch (jobErr: any) {
            console.error(`[JobCircular] Error processing job "${job?.title}":`, jobErr);
            latestProgress.failed++;
            latestProgress.errors.push(`${job?.title}: ${jobErr.message}`);
            addLog('error', `❌ ব্যর্থ হয়েছে ("${job?.title}"): ${jobErr.message}`);
        } finally {
            latestProgress.processed++;
            latestProgress.percent = Math.round((latestProgress.processed / latestProgress.total) * 100);
        }
    }

    latestProgress.isRunning = false;
    latestProgress.currentStep = `প্রসেসিং সমাপ্ত! (${latestProgress.created}টি নতুন, ${latestProgress.duplicates_skipped}টি স্কিপ)`;
    latestProgress.completedAt = new Date().toISOString();
    addLog('success', `🏁 ব্যাচ প্রসেসিং সমাপ্ত! মোট: ${latestProgress.total}, নতুন পোস্ট: ${latestProgress.created}, ডুপ্লিকেট বাদ: ${latestProgress.duplicates_skipped}, ব্যর্থ: ${latestProgress.failed}`);
}

// ---------- পেস্ট করার পেজ (Public UI with Modern Dashboard & Realtime Logs) ----------
router.get('/', (_req: Request, res: Response) => {
    res.type('html').send(`<!doctype html>
<html lang="bn">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>ClassMaster — Job Circular অটো-পোস্ট ড্যাশবোর্ড</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif; max-width: 860px; margin: 28px auto; padding: 0 16px; background: #f1f5f9; color: #1e293b; }
    .card { background: #ffffff; padding: 28px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04); border: 1px solid #e2e8f0; }
    
    .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    h2 { margin: 0; color: #0f172a; font-size: 22px; display: flex; align-items: center; gap: 10px; }
    .badge { padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 700; background: #dbeafe; color: #1e40af; }
    p.sub { color: #64748b; font-size: 14px; margin-top: 4px; margin-bottom: 20px; }

    textarea { width: 100%; height: 260px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; line-height: 1.5; padding: 14px; border: 1.5px solid #cbd5e1; border-radius: 10px; resize: vertical; outline: none; background: #f8fafc; transition: all 0.2s; }
    textarea:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }

    .btn-container { margin-top: 14px; }
    button { display: flex; align-items: center; justify-content: center; gap: 10px; background: #2563eb; color: #fff; border: none; padding: 14px 24px; font-size: 16px; font-weight: 600; border-radius: 10px; cursor: pointer; width: 100%; transition: all 0.2s; box-shadow: 0 4px 6px -1px rgba(37,99,235,0.2); }
    button:hover:not(:disabled) { background: #1d4ed8; transform: translateY(-1px); box-shadow: 0 6px 12px -2px rgba(37,99,235,0.3); }
    button:disabled { background: #94a3b8; cursor: not-allowed; box-shadow: none; transform: none; }

    .spinner { display: inline-block; width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: #fff; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Stats Grid */
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 24px; }
    .stat-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; text-align: center; }
    .stat-val { font-size: 22px; font-weight: 700; color: #0f172a; }
    .stat-lbl { font-size: 12px; color: #64748b; font-weight: 500; margin-top: 2px; }
    .stat-created .stat-val { color: #16a34a; }
    .stat-skipped .stat-val { color: #d97706; }
    .stat-failed .stat-val { color: #dc2626; }

    /* Progress Bar */
    .progress-section { margin-top: 22px; }
    .progress-header { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px; }
    .progress-track { height: 10px; background: #e2e8f0; border-radius: 9999px; overflow: hidden; position: relative; }
    .progress-fill { height: 100%; width: 0%; background: linear-gradient(90deg, #3b82f6, #10b981); transition: width 0.3s ease; border-radius: 9999px; }
    .current-step { font-size: 13px; color: #475569; margin-top: 6px; font-weight: 500; min-height: 20px; }

    /* Log Console */
    .log-container { margin-top: 20px; }
    .log-title { font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
    .log-box { background: #0f172a; color: #f1f5f9; padding: 14px; border-radius: 10px; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 12.5px; line-height: 1.6; height: 240px; overflow-y: auto; border: 1px solid #1e293b; }
    .log-entry { margin-bottom: 4px; word-break: break-word; }
    .log-time { color: #64748b; margin-right: 8px; font-size: 11px; }
    .log-info { color: #93c5fd; }
    .log-success { color: #86efac; font-weight: 600; }
    .log-warn { color: #fde047; }
    .log-error { color: #fca5a5; font-weight: 600; }
    
    @media (max-width: 600px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header-row">
      <h2>💼 Job Circular অটো-পোস্ট ড্যাশবোর্ড</h2>
      <span class="badge">পাবলিক মোড</span>
    </div>
    <p class="sub">নিচে JSON পেস্ট করে বাটনে চাপুন। এটি ম্যাচিং চেক করে ডুপ্লিকেট স্কিপ করবে এবং নতুন বিজ্ঞপ্তির ইমেজ/পিডিএফ ক্লাউডে আপলোড করে তাৎক্ষণিক পোস্ট করবে।</p>
    
    <textarea id="json" placeholder='{"jobs":[{"title":"...","description":"...","pdf":"https://..."}]}'></textarea>
    
    <div class="btn-container">
      <button id="btn" type="button" onclick="send()">
        <span id="btn-text">পোস্ট করুন</span>
      </button>
    </div>

    <!-- Live Progress Bar -->
    <div class="progress-section">
      <div class="progress-header">
        <span id="progress-label">প্রসেসিং স্ট্যাটাস</span>
        <span id="progress-percent">০%</span>
      </div>
      <div class="progress-track">
        <div id="progress-fill" class="progress-fill"></div>
      </div>
      <div id="current-step" class="current-step">অপেক্ষমান... কোনো কাজ চলমান নেই</div>
    </div>

    <!-- Live Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-val" id="stat-total">০</div>
        <div class="stat-lbl">মোট বিজ্ঞপ্তি</div>
      </div>
      <div class="stat-card stat-created">
        <div class="stat-val" id="stat-created">০</div>
        <div class="stat-lbl">নতুন তৈরি হয়েছে</div>
      </div>
      <div class="stat-card stat-skipped">
        <div class="stat-val" id="stat-skipped">০</div>
        <div class="stat-lbl">ডুপ্লিকেট স্কিপ</div>
      </div>
      <div class="stat-card stat-failed">
        <div class="stat-val" id="stat-failed">০</div>
        <div class="stat-lbl">ব্যর্থ হয়েছে</div>
      </div>
    </div>

    <!-- Live Activity Logs -->
    <div class="log-container">
      <div class="log-title">
        <span>📋 লাইভ প্রসেসিং লগ (Live Activity Stream)</span>
        <span id="live-indicator" style="font-size: 11px; color: #16a34a; font-weight: normal;">● রেডি</span>
      </div>
      <div class="log-box" id="log-box">
        <div class="log-entry" style="color: #64748b;">[রেডি] JSON পেস্ট করে "পোস্ট করুন" বাটনে চাপুন...</div>
      </div>
    </div>
  </div>

  <script>
    var pollInterval = null;

    function getBasePath() {
      var p = window.location.pathname;
      if (p.endsWith('/')) {
        p = p.slice(0, -1);
      }
      return p;
    }

    function updateUI(data) {
      if (!data) return;

      var percent = data.percent || 0;
      document.getElementById('progress-percent').textContent = percent + '%';
      document.getElementById('progress-fill').style.width = percent + '%';
      document.getElementById('current-step').textContent = data.currentStep || '';

      document.getElementById('stat-total').textContent = data.total || 0;
      document.getElementById('stat-created').textContent = data.created || 0;
      document.getElementById('stat-skipped').textContent = data.duplicates_skipped || 0;
      document.getElementById('stat-failed').textContent = data.failed || 0;

      // Update log entries
      if (data.logs && data.logs.length > 0) {
        var logBox = document.getElementById('log-box');
        var html = '';
        data.logs.forEach(function(item) {
          var cls = 'log-' + (item.type || 'info');
          html += '<div class="log-entry"><span class="log-time">[' + item.time + ']</span><span class="' + cls + '">' + item.message + '</span></div>';
        });
        logBox.innerHTML = html;
        logBox.scrollTop = logBox.scrollHeight;
      }
    }

    async function checkStatus() {
      try {
        var r = await fetch(getBasePath() + '/status');
        var data = await r.json();
        updateUI(data);

        var btn = document.getElementById('btn');
        var btnText = document.getElementById('btn-text');
        var liveInd = document.getElementById('live-indicator');

        if (data.isRunning) {
          btn.disabled = true;
          btnText.innerHTML = '<span class="spinner"></span> প্রসেসিং চলছে (' + data.percent + '%)...';
          liveInd.innerHTML = '● প্রসেসিং চলছে...';
          liveInd.style.color = '#3b82f6';
        } else {
          if (pollInterval) {
            clearInterval(pollInterval);
            pollInterval = null;
          }
          btn.disabled = false;
          btnText.textContent = 'পোস্ট করুন';
          liveInd.innerHTML = '● সমাপ্ত';
          liveInd.style.color = '#16a34a';
        }
      } catch (e) {
        console.error('Status fetch error:', e);
      }
    }

    async function send() {
      var btn = document.getElementById('btn');
      var btnText = document.getElementById('btn-text');
      var jsonText = (document.getElementById('json').value || '').trim();

      if (!jsonText) {
        alert('অনুগ্রহ করে JSON পেস্ট করুন');
        return;
      }

      var body;
      try {
        body = JSON.parse(jsonText);
      } catch (e) {
        alert('❌ JSON ফরম্যাট ভুল: ' + e.message);
        return;
      }

      btn.disabled = true;
      btnText.innerHTML = '<span class="spinner"></span> পাঠানো হচ্ছে...';
      document.getElementById('current-step').textContent = 'সার্ভারে পাঠানো হচ্ছে ও ব্যাকগ্রাউন্ড প্রসেসিং শুরু হচ্ছে...';
      document.getElementById('live-indicator').innerHTML = '● পাঠানো হচ্ছে...';

      try {
        var r = await fetch(getBasePath(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        var res = await r.json();

        if (pollInterval) clearInterval(pollInterval);
        pollInterval = setInterval(checkStatus, 1500);
        checkStatus();
      } catch (e) {
        alert('❌ ত্রুটি: ' + e.message);
        btn.disabled = false;
        btnText.textContent = 'পোস্ট করুন';
      }
    }

    // Attach click event
    document.addEventListener('DOMContentLoaded', function() {
      var btn = document.getElementById('btn');
      if (btn) btn.onclick = send;
      checkStatus();
    });
    var btn = document.getElementById('btn');
    if (btn) btn.onclick = send;
  </script>
</body>
</html>`);
});

// ---------- লাইভ স্ট্যাটাস চেক API ----------
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

        // Sync mode option
        if (req.query.sync === 'true') {
            await executeJobProcessing(jobs, TARGET_USER_ID);
            return res.json({
                message: 'প্রসেসিং সফলভাবে সম্পন্ন হয়েছে',
                ...latestProgress
            });
        }

        // Async Background mode
        executeJobProcessing(jobs, TARGET_USER_ID).catch(err => {
            console.error('[JobCircular] Unhandled error in batch process:', err);
        });

        res.status(202).json({
            message: 'বিজ্ঞপ্তি গ্রহণ করা হয়েছে! ব্যাকগ্রাউন্ডে পিডিএফ/ইমেজ ডাউনলোড, ক্লাউড আপলোড এবং নোটিশ তৈরি শুরু হয়েছে।',
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
