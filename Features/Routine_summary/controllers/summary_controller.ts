import { Response } from 'express';
// Prisma & AWS
import prisma from '../../../prisma/schema/prisma.clint';
import { summaryFilePath } from '../../../services/storage/stroage.path';
import { uploadFile, deleteFile, BUCKET_NAME, storage } from '../../../services/storage/storage';
import { StorageProvider } from '../../../utils/enums';
import { SummaryType } from '@prisma/client';


// ==========================================
// 📝 CREATE SUMMARY
// ==========================================
export const addSummary = async (req: any, res: Response) => {
  const { message, pollOptions, type } = req.body;
  const { classID } = req.params;
  const { id: userID } = req.user;
  const routineID = req.routineID; // Passed from middleware

  // ✅ Validate required fields
  if (!routineID) {
    return res.status(400).json({
      message: 'routineID is required. Make sure the middleware is passing it correctly.'
    });
  }

  console.log("Creating summary with params:", { userID, routineID, classID });

  try {
    const files = req.files as Express.Multer.File[] || [];
    const uploadedFileKeys: string[] = [];

    // Step 1: Upload Files to Storage (MinIO or Cloudflare R2)
    if (files.length > 0) {
      for (const file of files) {
        const key = summaryFilePath(routineID, userID, file.originalname);
        await uploadFile(BUCKET_NAME, key, file);
        uploadedFileKeys.push(key);
      }
    }

    // Step 2: Set Auto-Delete (120 days from now)
    const autoDeleteDate = new Date();
    autoDeleteDate.setDate(autoDeleteDate.getDate() + 120);

    // Determine type and file type
    let typeValue: SummaryType = SummaryType.TEXT;
    let fileTypeVal: string | null = null;

    if (uploadedFileKeys.length > 0) {
      typeValue = SummaryType.MEDIA;
      const mime = files[0].mimetype;
      if (mime.startsWith('image/')) {
        fileTypeVal = 'image';
      } else if (mime.startsWith('video/')) {
        fileTypeVal = 'video';
      } else {
        fileTypeVal = 'document';
      }
    }

    let parsedPollOptions = null;
    if (pollOptions) {
      try {
        parsedPollOptions = typeof pollOptions === 'string'
          ? JSON.parse(pollOptions)
          : pollOptions;
        if (Array.isArray(parsedPollOptions)) {
          typeValue = SummaryType.POLL;
          parsedPollOptions = parsedPollOptions.map((opt: any) => ({
            option: typeof opt === 'string' ? opt : opt.option,
            votes: opt.votes || []
          }));
        }
      } catch (err) {
        console.error("Failed to parse pollOptions:", err);
      }
    }

    if (type === 'SYSTEM') {
      typeValue = SummaryType.SYSTEM;
    }

    // Step 3: Save to Database
    const createdSummary = await prisma.$transaction(async (tx: any) => {
      // ✅ Use scalar fields only (simplest approach)
      const summary = await tx.summary.create({
        data: {
          ownerId: userID,
          routineId: routineID,
          classId: classID,
          text: message?.trim() || '',
          imageLinks: uploadedFileKeys,
          autoDeleteAt: autoDeleteDate,
          imageStorageProvider: uploadedFileKeys.length > 0 ? storage : null,
          type: typeValue,
          fileType: fileTypeVal,
          pollOptions: parsedPollOptions,
        },
      });

      // Update routine timestamp
      await tx.routine.update({
        where: { id: routineID },
        data: { updatedAt: new Date() },
      });

      return summary;
    });

    const fullSummary = await prisma.summary.findUnique({
      where: { id: createdSummary.id },
      include: {
        owner: { select: { id: true, username: true, name: true, image: true } },
        class: { select: { id: true, name: true, instructorName: true } },
      }
    });

    if (req.io && fullSummary) {
      req.io.to(routineID).emit("chat message", {
        id: fullSummary.id,
        text: fullSummary.text,
        fileLinks: fullSummary.imageLinks || [],
        createdAt: fullSummary.createdAt,
        owner: fullSummary.owner,
        classInfo: fullSummary.class,
        type: fullSummary.type,
        fileType: fullSummary.fileType,
        pollOptions: fullSummary.pollOptions,
      });
    }

    return res.status(201).json({
      message: 'Summary created successfully',
      summary: fullSummary
    });
  } catch (error: any) {
    console.error('Error creating summary:', error);
    return res.status(500).json({
      message: 'Internal Server Error while creating summary',
      error: error.message
    });
  }
};

// ==========================================
// 🗑️ DELETE SUMMARY
// ==========================================
export const removeSummary = async (req: any, res: Response) => {
  const { summaryID } = req.params;
  const findSummary = req.findSummary; // From modification permission middleware

  try {
    // Step 1: Delete Files from Storage (MinIO or Cloudflare R2)
    for (const fileKey of findSummary.imageLinks ?? []) {
      try {
        await deleteFile(BUCKET_NAME, fileKey, findSummary.imageStorageProvider as StorageProvider);
      } catch (err) {
        console.error(`Failed to delete file ${fileKey} from storage:`, err);
      }
    }

    // Step 2: Delete from DB
    await prisma.summary.delete({ where: { id: summaryID } });

    return res.status(200).json({ message: "Summary deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting summary:", error);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

// ==========================================
// 📚 GET SUMMARIES (Unified Endpoint)
// ==========================================
export const get_summary_list = async (req: any, res: Response) => {
  const { classId, type, page = 1, limit = 10 } = req.query;
  const userID = req.user.id;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);
  console.log("Fetching summaries with params:", { classId, type, page, limit, userID });
  try {
    let summaries: any[] = [];
    let totalCount = 0;

    // Fetch Saved Summaries
    if (type === 'saved') {
      const account = await prisma.account.findUnique({
        where: { id: userID },
        select: {
          _count: { select: { saveSummary: true } },
          saveSummary: {
            include: {
              class: { select: { id: true, name: true, instructorName: true } },
              owner: { select: { id: true, username: true, name: true, image: true } },
            },
            orderBy: { createdAt: "desc" },
            skip,
            take,
          }
        }
      });
      totalCount = account?._count?.saveSummary || 0;
      summaries = account?.saveSummary || [];
    }
    // Fetch Class Summaries
    else if (classId) {
      totalCount = await prisma.summary.count({ where: { classId: String(classId) } });
      summaries = await prisma.summary.findMany({
        where: { classId: String(classId) },
        include: {
          owner: { select: { id: true, username: true, name: true, image: true } },
          class: { select: { id: true, name: true, instructorName: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take,
      });
    } else {
      return res.status(400).json({ message: "Please provide classId or type=saved parameter." });
    }

    // 🎯 Unifying JSON for easy Dart Mapping
    // Renaming 'class' to 'classInfo' to avoid Dart reserved keyword crashes
    const formattedSummaries = summaries.map(summary => ({
      id: summary.id,
      text: summary.text,
      fileLinks: summary.imageLinks || [],
      createdAt: summary.createdAt,
      owner: summary.owner,
      classInfo: summary.class,
      type: summary.type,
      fileType: summary.fileType,
      pollOptions: summary.pollOptions,
    }));

    return res.status(200).json({
      message: "Summaries fetched successfully",
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / take),
      totalCount,
      summaries: formattedSummaries,
    });

  } catch (error: any) {
    console.error("Fetch Summary Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ==========================================
// 🔍 SUMMARY STATUS
// ==========================================
export const summary_status = async (req: any, res: Response) => {
  try {
    const { summaryID } = req.params;
    const { id: userId } = req.user;

    const foundSummary = await prisma.summary.findUnique({
      where: { id: summaryID },
      include: { routine: true },
    });

    if (!foundSummary) return res.status(404).json({ message: "Summary not found." });

    const { ownerId, routineId } = foundSummary;

    const routineMember = await prisma.routineMember.findFirst({
      where: { routineId, accountId: userId },
    });

    const isSummarySaved = Boolean(
      await prisma.account.findFirst({
        where: { id: userId, saveSummary: { some: { id: summaryID } } }
      })
    );

    return res.status(200).json({
      summaryOwner: ownerId === userId,
      isOwner: routineMember?.owner ?? false,
      isCaptain: routineMember?.captain ?? false,
      isSummarySaved,
    });
  } catch (error) {
    console.error("Error in summary_status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ==========================================
// 🔖 SAVE/UNSAVE SUMMARY
// ==========================================
export const saveUnsaveSummary = async (req: any, res: Response) => {
  try {
    const { save, summaryId } = req.body;
    const { id: userId } = req.user;

    const foundSummary = await prisma.summary.findUnique({ where: { id: summaryId } });

    if (!foundSummary) return res.status(404).json({ message: 'Summary not found' });

    if (save === 'true' || save === true) {
      const isSaved = await prisma.account.findFirst({
        where: { id: userId, saveSummary: { some: { id: summaryId } } },
      });

      if (isSaved) return res.status(409).json({ message: 'Summary already saved' });

      await prisma.account.update({
        where: { id: userId },
        data: { saveSummary: { connect: { id: summaryId } } },
      });

      return res.status(200).json({ message: 'Summary saved successfully', save: true });

    } else if (save === 'false' || save === false) {
      const isSaved = await prisma.account.findFirst({
        where: { id: userId, saveSummary: { some: { id: summaryId } } },
      });

      if (!isSaved) return res.status(404).json({ message: 'Saved summary not found' });

      await prisma.account.update({
        where: { id: userId },
        data: { saveSummary: { disconnect: { id: summaryId } } },
      });

      return res.status(200).json({ message: 'Summary unsaved successfully', save: false });
    }

    return res.status(400).json({ message: 'Valid save condition (true/false) is required' });
  } catch (error: any) {
    console.error('Error saving/unsaving:', error);
    return res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 🗳️ VOTE IN A POLL
// ==========================================
export const votePoll = async (req: any, res: Response) => {
  const { summaryID } = req.params;
  const { optionIndex } = req.body; // Zero-based index of option chosen
  const { id: userID } = req.user;

  if (optionIndex === undefined || optionIndex === null) {
    return res.status(400).json({ message: "optionIndex is required." });
  }

  try {
    const summary = await prisma.summary.findUnique({ where: { id: summaryID } });
    if (!summary || summary.type !== SummaryType.POLL || !summary.pollOptions) {
      return res.status(404).json({ message: "Poll summary not found." });
    }

    let options = summary.pollOptions as any[];
    const idx = Number(optionIndex);
    if (idx < 0 || idx >= options.length) {
      return res.status(400).json({ message: "Invalid optionIndex range." });
    }

    // Single-choice vote toggle logic
    options = options.map((opt, currentIdx) => {
      let votes: string[] = opt.votes || [];
      if (currentIdx === idx) {
        if (votes.includes(userID)) {
          votes = votes.filter(id => id !== userID); // Toggle off if already voted
        } else {
          votes.push(userID); // Vote on
        }
      } else {
        votes = votes.filter(id => id !== userID); // Remove vote from other options
      }
      return { ...opt, votes };
    });

    const updatedSummary = await prisma.summary.update({
      where: { id: summaryID },
      data: { pollOptions: options },
      include: {
        owner: { select: { id: true, username: true, name: true, image: true } },
        class: { select: { id: true, name: true, instructorName: true } },
      }
    });

    const pollResponsePayload = {
      id: updatedSummary.id,
      text: updatedSummary.text,
      fileLinks: updatedSummary.imageLinks || [],
      createdAt: updatedSummary.createdAt,
      owner: updatedSummary.owner,
      classInfo: updatedSummary.class,
      type: updatedSummary.type,
      fileType: updatedSummary.fileType,
      pollOptions: updatedSummary.pollOptions,
    };

    if (req.io) {
      req.io.to(updatedSummary.routineId).emit("chat message", pollResponsePayload);
    }

    return res.status(200).json({
      message: "Vote cast successfully",
      summary: pollResponsePayload
    });
  } catch (error: any) {
    console.error("Error voting on poll:", error);
    return res.status(500).json({ message: "Failed to record vote", error: error.message });
  }
};