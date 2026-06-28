import { Request, Response, NextFunction } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';

export const validateSummaryRequest = async (req: any, res: Response, next: NextFunction) => {
    const { message, checkedType, externalLinks } = req.body;
    const { classID } = req.params;

    // Step 1: Ensure files array exists
    const files = req.files as Express.Multer.File[] || [];

    // Step 2: Validate Input Data
    const hasMessage = message?.trim().length > 0;
    const hasFiles = files.length > 0;
    const hasLinks = externalLinks?.length > 0;

    if (!hasMessage && !hasFiles && !hasLinks && !checkedType) {
        return res.status(400).json({
            message: 'Message, links, or at least one file must be provided.',
        });
    }

    try {
        // Step 3: Verify Class Existence & Get Routine ID (DRY Principle)
        const findClass = await prisma.class.findUnique({
            where: { id: classID },
            select: { id: true, routineId: true }
        });

        if (!findClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        // Attach routineID to request object so controller doesn't need to fetch it again
        req.routineID = findClass.routineId;

        // Step 4: MIME Type Validation (Modern files support)
        const allowedMimeTypes = [
            'image/jpeg', 'image/png', 'image/webp', // Images
            'application/pdf',                       // PDF
            'application/msword',                    // DOC
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
            'application/vnd.ms-excel',              // XLS
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'        // XLSX
        ];

        const invalidFiles = files.filter(file => !allowedMimeTypes.includes(file.mimetype));

        if (invalidFiles.length > 0 && !checkedType) {
            const invalidNames = invalidFiles.map(file => file.originalname).join(', ');
            return res.status(400).json({
                message: `Invalid file types uploaded: ${invalidNames}. Only Images, PDF, Word, and Excel are supported.`,
            });
        }

        next(); // Move to permission middleware or controller
    } catch (error) {
        console.error('Error in validateSummaryRequest:', error);
        return res.status(500).json({ message: 'Internal Server Error during validation.' });
    }
};




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