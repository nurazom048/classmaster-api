// autotask.helper.ts
import PDFDocument from 'pdfkit';

/**
 * Helper: Converts low-resolution Blogger/Google image URLs 
 * into high-resolution original source files (/s0/)
 */
export function optimizeImageUrl(url: string): string {
    if (!url) return url;
    return url.replace(/\/(s\d+[-c]*|w\d+-h\d+[^/]*)\//, '/s0/');
}

/**
 * Helper: Extract all image sources from HTML content
 */
export function extractImages(html: string | undefined): string[] {
    if (!html) return [];
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls: string[] = [];
    while ((match = regex.exec(html)) !== null) {
        urls.push(optimizeImageUrl(match[1]));
    }
    return urls;
}

/**
 * Helper: Convert downloaded images to a single PDF Buffer
 */
export async function createPdfFromImages(imageUrls: string[], textDescription: string): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = new PDFDocument({ autoFirstPage: false });
            const buffers: any[] = [];

            doc.on('data', (chunk) => buffers.push(chunk));
            doc.on('end', () => {
                resolve(Buffer.concat(buffers as unknown as Uint8Array[]));
            });

            for (const url of imageUrls) {
                try {
                    const imgRes = await fetch(url);
                    if (!imgRes.ok) continue;
                    const imgBuffer = Buffer.from(await imgRes.arrayBuffer());

                    doc.addPage();
                    doc.image(imgBuffer, 0, 0, {
                        fit: [doc.page.width, doc.page.height],
                        align: 'center',
                        valign: 'center'
                    });
                } catch (imgErr) {
                    console.error(`Failed to load image for PDF: ${url}`, imgErr);
                }
            }

            if (imageUrls.length === 0) {
                doc.addPage().text(textDescription || "No images or description provided.", 50, 50);
            }

            doc.end();
        } catch (err) {
            reject(err);
        }
    });
}

/**
 * Helper: টাইটেলের কি-ওয়ার্ড (Keyword) অনুযায়ী ক্যাটাগরি ঠিক করে 
 * সম্পূর্ণ নতুন এবং প্রাসঙ্গিক ডেসক্রিপশন তৈরি করবে।
 */
export function generateDynamicDescription(title: string, accountIdentifier: string): string {
    if (title.includes('ফলাফল') || title.includes('রেজাল্ট') || title.includes('Result') || title.includes('চূড়ান্ত')) {
        const resultTemplates = [
            `অবশেষে প্রকাশিত হলো "${title}"-এর কাঙ্ক্ষিত ফলাফল! 🎉\n\nফলাফলের বিস্তারিত তালিকা এবং পরবর্তী করণীয় সম্পর্কে জানতে অনুগ্রহ করে নিচের পিডিএফ (PDF) ফাইলটি ডাউনলোড করে চেক করুন।\n\nসব ধরনের পরীক্ষার রেজাল্ট ও আপডেট সবার আগে পেতে ${accountIdentifier} নোটিশ বোর্ডে জয়েন হয়ে থাকুন।`,
            `"${title}"-এর রেজাল্ট সংক্রান্ত নতুন নোটিশ প্রকাশিত হয়েছে।\n\nআপনার ফলাফল এবং প্রয়োজনীয় দিকনির্দেশনা জানতে সংযুক্ত পিডিএফটি ওপেন করুন।\n\nনিয়মিত চাকরির খবর ও রেজাল্ট পেতে ${accountIdentifier}-এর সাথেই থাকুন।`,
            `সুখবর! "${title}"-এর ফলাফল প্রকাশ করা হয়েছে।\n\nপিডিএফ ফাইলে উত্তীর্ণদের তালিকা এবং অন্যান্য গুরুত্বপূর্ণ তথ্য দেওয়া আছে। ফাইলটি ডাউনলোড করে বিস্তারিত দেখে নিন।\n\n${accountIdentifier} নোটিশ বোর্ডে যুক্ত থাকুন সব ধরনের আপডেটের জন্য।`
        ];
        return resultTemplates[Math.floor(Math.random() * resultTemplates.length)];
    }

    if (title.includes('নিয়োগ') || title.includes('সার্কুলার') || title.includes('বিজ্ঞপ্তি') || title.includes('Circular')) {
        const circularTemplates = [
            `নতুন চাকরির সুযোগ! "${title}" প্রকাশিত হয়েছে। 💼\n\nপদের নাম, যোগ্যতা, আবেদনের শেষ তারিখ ও নিয়মকানুনসহ বিস্তারিত তথ্য জানতে সংযুক্ত পিডিএফটি ডাউনলোড করে পড়ে নিন।\n\nক্যারিয়ার ও চাকরির নতুন সব আপডেট পেতে ${accountIdentifier} নোটিশ বোর্ডে জয়েন হন।`,
            `ক্যারিয়ার গড়ার দারুণ সুযোগ। "${title}" সংক্রান্ত নতুন সার্কুলার দিয়েছে কর্তৃপক্ষ।\n\nআবেদনের শর্তাবলী এবং অন্যান্য তথ্য বিস্তারিতভাবে পিডিএফে উল্লেখ করা আছে। পিডিএফটি ওপেন করে বিস্তারিত জেনে নিন।\n\nচাকরির খবর সবার আগে পেতে ${accountIdentifier} ফলো করুন।`,
            `"${title}"-এর নতুন বিজ্ঞপ্তি প্রকাশ করা হয়েছে।\n\nযারা এই নিয়োগের জন্য অপেক্ষা করছিলেন, তারা সংযুক্ত পিডিএফ ফাইল থেকে আবেদনের বিস্তারিত প্রক্রিয়া দেখে নিতে পারেন।\n\nনিয়মিত চাকরির সার্কুলার পেতে ${accountIdentifier} নোটিশ বোর্ডে যুক্ত থাকুন।`
        ];
        return circularTemplates[Math.floor(Math.random() * circularTemplates.length)];
    }

    if (title.includes('তারিখ') || title.includes('যোগদান') || title.includes('পরীক্ষা') || title.includes('প্রবেশপত্র') || title.includes('মৌখিক')) {
        const dateTemplates = [
            `"${title}" সংক্রান্ত গুরুত্বপূর্ণ সময়সূচি প্রকাশ করা হয়েছে। 📅\n\nপরীক্ষা/যোগদানের স্থান, তারিখ এবং অন্যান্য প্রয়োজনীয় নির্দেশনার জন্য নিচের পিডিএফ ডকুমেন্টটি ডাউনলোড করুন।\n\nনিয়মিত নোটিশ আপডেট পেতে ${accountIdentifier} নোটিশ বোর্ডে জয়েন হন।`,
            `গুরুত্বপূর্ণ আপডেট: "${title}"।\n\nসময়সূচি ও পরবর্তী কার্যক্রম সম্পর্কে বিস্তারিত জানতে সংযুক্ত পিডিএফটি চেক করার অনুরোধ রইল।\n\nপ্রতিদিনের দরকারি নোটিশ মিস না করতে ${accountIdentifier}-এর সাথেই থাকুন।`,
            `যারা "${title}" এর জন্য অপেক্ষা করছিলেন, তাদের জন্য নতুন নোটিশ দেওয়া হয়েছে।\n\nনির্ধারিত তারিখ ও অন্যান্য শর্তাবলী জানতে পিডিএফ ফাইলটি ওপেন করুন।\n\nসব ধরনের শিক্ষা ও চাকরির আপডেটের জন্য ${accountIdentifier} নোটিশ বোর্ড ফলো করতে পারেন।`
        ];
        return dateTemplates[Math.floor(Math.random() * dateTemplates.length)];
    }

    const commonTemplates = [
        `সম্প্রতি "${title}" সংক্রান্ত নতুন একটি বিজ্ঞপ্তি প্রকাশিত হয়েছে। 📌\n\nবিস্তারিত তথ্য ও নিয়মকানুন জানতে অনুগ্রহ করে সংযুক্ত পিডিএফ (PDF) ডকুমেন্টটি ওপেন করুন অথবা ডাউনলোড করে পড়ে নিন।\n\nনিয়মিত নোটিশ, পরীক্ষার রেজাল্ট এবং চাকরির আপডেট সবার আগে পেতে ${accountIdentifier} নোটিশ বোর্ডে জয়েন হন।`,
        `"${title}"-এর বিস্তারিত নোটিশ দেখতে নিচের পিডিএফটি চেক করুন।\n\nএখানে সকল প্রয়োজনীয় তথ্য ও নির্দেশিকা যুক্ত করা হয়েছে। পিডিএফটি ডাউনলোড করে বিস্তারিত জেনে নেওয়ার অনুরোধ রইল।\n\nপ্রতিদিনের দরকারি নোটিশ ও আপডেট মিস না করতে ${accountIdentifier}-এর সাথেই থাকুন।`,
        `আপনাদের অবগতির জন্য জানানো যাচ্ছে যে, "${title}" বিষয়ক একটি গুরুত্বপূর্ণ আপডেট এসেছে।\n\nপূর্ণাঙ্গ বিবরণ এবং শর্তাবলী জানতে পিডিএফ ফাইলটি ডাউনলোড করে দেখে নিতে পারেন।\n\nসব ধরনের শিক্ষা, ক্যারিয়ার ও চাকরির খবরের জন্য ${accountIdentifier} নোটিশ বোর্ড ফলো করতে পারেন।`,
        `নতুন আপডেট: ${title}।\n\nএই নোটিশের বিস্তারিত তথ্য জানতে সংযুক্ত পিডিএফ ফাইলটি ওপেন করুন। প্রয়োজনীয় সব নির্দেশনা পিডিএফে দেওয়া আছে।\n\n${accountIdentifier} নোটিশ বোর্ডে যুক্ত থেকে এরকম আরও দরকারি আপডেট নিয়মিত পান সবার আগে।`,
        `গুরুত্বপূর্ণ নোটিশ: "${title}" প্রকাশ করা হয়েছে।\n\nসময় বাঁচাতে ও বিস্তারিত জানতে সংযুক্ত পিডিএফ থেকে পুরো নোটিশটি পড়ে নিন।\n\n${accountIdentifier} নোটিশ বোর্ডে জয়েন করে আমাদের নিয়মিত সদস্য হয়ে যান।`
    ];

    return commonTemplates[Math.floor(Math.random() * commonTemplates.length)];
}