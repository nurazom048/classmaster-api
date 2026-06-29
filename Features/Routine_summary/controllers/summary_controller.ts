import express, { Request, Response } from 'express';
// Firebase
const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');
const firebase_storage = require("../../../config/firebase/firebase_storage");
initializeApp(firebase_storage.firebaseConfig);
const storage = getStorage();

// Prisma & AWS
import prisma from '../../../prisma/schema/prisma.clint';
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../../services/storage/storage.mino.s3";
import { summaryFilePath } from '../../../services/storage/stroage.path';

const BUCKET_NAME = 'storageforclassmaster';

// ==========================================
// 📝 CREATE SUMMARY
// ==========================================
export const addSummary = async (req: any, res: Response) => {
  const { message } = req.body;
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

    // Step 1: Upload Files to MinIO
    if (files.length > 0) {
      const folderName = routineID;
      const date = new Date();
      const month = date.toLocaleString('default', { month: 'long' });

      for (const file of files) {
        const key = `summary/${month}/${folderName}-${userID}/${Date.now()}-${file.originalname}`;
        await s3Client.send(new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
        }));
        uploadedFileKeys.push(key);
      }
    }

    // Step 2: Set Auto-Delete (120 days from now)
    const autoDeleteDate = new Date();
    autoDeleteDate.setDate(autoDeleteDate.getDate() + 120);

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
          imageStorageProvider: uploadedFileKeys.length > 0 ? 'aws' : null,
        },
      });

      // Update routine timestamp
      await tx.routine.update({
        where: { id: routineID },
        data: { updatedAt: new Date() },
      });

      return summary;
    });

    return res.status(201).json({
      message: 'Summary created successfully',
      summary: createdSummary
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
    // Step 1: Delete Files from MinIO
    for (const fileKey of findSummary.fileLinks ?? []) {
      try {
        await s3Client.send(new DeleteObjectCommand({
          Bucket: BUCKET_NAME,
          Key: fileKey,
        }));
      } catch (minioErr) {
        console.error(`Failed to delete file ${fileKey} from MinIO:`, minioErr);
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
    }));

    console.log({
      message: "Summaries fetched successfully",
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / take),
      totalCount,
      summaries: formattedSummaries,
    });
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