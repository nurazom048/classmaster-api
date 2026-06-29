import { Request, Response, NextFunction } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';
import path from 'path';



export const checkSummaryExists = async (req: any, res: Response, next: NextFunction) => {
    // 💡 Grabs ID from either URL params or request body
    const summaryId = req.params.summaryID || req.body.summaryId;

    if (!summaryId) {
        return res.status(400).json({ message: "Summary ID is required" });
    }

    try {
        const summary = await prisma.summary.findUnique({
            where: { id: summaryId }
        });

        if (!summary) {
            return res.status(404).json({ message: "Summary not found." });
        }

        // Attach to request object in case subsequent controllers need its data
        req.summary = summary;
        next();
    } catch (error) {
        console.error("Error in checkSummaryExists middleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const validateSummaryRequest = (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Express.Multer.File[] || [];

    // অনুমোদিত এক্সটেনশন এবং MIME Types
    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.pdf', '.doc', '.docx', '.xls', '.xlsx'];
    const allowedMimeTypes = [
        'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/pdf',
        'application/msword',                                                        // .doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',   // .docx
        'application/vnd.ms-excel',                                                  // .xls
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'          // .xlsx
    ];

    const invalidFiles: string[] = [];

    for (const file of files) {
        const ext = path.extname(file.originalname).toLowerCase();
        const mime = file.mimetype;

        const isExtensionValid = allowedExtensions.includes(ext);
        // ওয়েব থেকে অনেক সময় mimetype 'application/octet-stream' আসে, তাই এক্সটেনশন ঠিক থাকলে ওটাকে অ্যালাউ করা হচ্ছে
        const isMimeValid = allowedMimeTypes.includes(mime) || mime === 'application/octet-stream';

        if (!isExtensionValid || !isMimeValid) {
            invalidFiles.push(file.originalname);
        }
    }

    if (invalidFiles.length > 0) {
        return res.status(400).json({
            message: `Invalid file types uploaded: ${invalidFiles.join(', ')}. Only Images, PDF, Word, and Excel are supported.`
        });
    }

    next();
};