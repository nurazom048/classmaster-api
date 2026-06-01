import express, { Request, Response } from 'express';
import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

// prisma
import prisma from '../../../prisma/schema/prisma.clint';
import { imageStorageProvider } from '@prisma/client';
// minio storage
import { minioS3Client, BUCKET_NAME } from '../../../services/storage/storage.minio.config';
//file compression
import sharp from 'sharp';

//*********************************************************************************/
//--------------------------- -add summary  --------------------------------------/
//********************************************************************************/
export const addSummary = async (req: any, res: Response) => {
  const { message, checkedType } = req.body;
  const { classID } = req.params;
  const { id } = req.user;
  const { routineID } = req;

  try {
    let provider: imageStorageProvider | null = null;
    const downloadUrls: string[] = []; // This will now ONLY store paths (s3Keys)
    const files = req.files || [];

    if (files.length > 0) {
      const timestamp = Date.now();

      for (let i = 0; i < files.length; i++) {
        // 💡 1. ফাইলের নাম থেকে স্পেস সরানো এবং এক্সটেনশন বাদ দেওয়া
        const originalName = files[i].originalname.split('.')[0];
        const cleanName = originalName.replace(/\s+/g, '-'); // স্পেসগুলোকে '-' বানিয়ে দিবে

        // 💡 2. নতুন নাম জেনারেট করা (যেহেতু webp তে কনভার্ট করছি, তাই এক্সটেনশন .webp)
        const filename = `${timestamp}-${i}-${cleanName}.webp`;
        const s3Key = `ID-${id}/routine/routineID-${routineID}/classID-${classID}/summary_files/${filename}`;

        // 💡 3. Sharp দিয়ে ইমেজ কম্প্রেস করা
        const compressedBuffer = await sharp(files[i].buffer)
          .resize({ width: 1200, withoutEnlargement: true }) // ১২০০px এর বেশি বড় করবে না
          .webp({ quality: 80 }) // WebP ফরম্যাটে ৮০% কোয়ালিটিতে কম্প্রেস করবে
          .toBuffer();

        try {
          await minioS3Client.send(
            new PutObjectCommand({
              Bucket: BUCKET_NAME,
              Key: s3Key,
              Body: compressedBuffer, // কম্প্রেসড বাফার পাঠানো হলো
              ContentType: 'image/webp', // কন্টেন্ট টাইপ চেঞ্জ করে webp করা হলো
            })
          );

          // শুধু পাথ সেভ করা হচ্ছে
          downloadUrls.push(s3Key);
        } catch (uploadError) {
          console.error(`❌ Failed to upload image ${filename} to MinIO:`, uploadError);
        }
      }
    }

    if (downloadUrls.length > 0) {
      provider = imageStorageProvider.minio;
    }

    // Step 2: Perform database operations in a transaction
    const createdSummary = await prisma.$transaction(async (tx) => {
      const summary = await tx.summary.create({
        data: {
          ownerId: id,
          text: message?.trim() === "" && downloadUrls.length > 0 ? '' : message,
          imageLinks: downloadUrls, // Just the paths!
          imageStorageProvider: provider,
          routineId: routineID,
          classId: classID,
        },
      });

      await tx.routine.update({
        where: { id: routineID },
        data: { updatedAt: new Date() },
      });

      return summary;
    });

    return res.status(201).json({
      message: 'Summary created successfully',
      summary: createdSummary,
    });
  } catch (error: any) {
    console.error('Error creating summary:', error);
    return res.status(500).json({ message: 'Server error occurred' });
  }
};

//***************************************************************************************/
//--------------------------- -Get class summary list  ----------------------------------/
//**************************************************************************************/
export const get_class_summary_list = async (req: any, res: Response) => {
  const { classID } = req.params;
  const { page = 1, limit = 10 } = req.query;

  try {
    let summaries: any[] = [];
    let totalCount = 0;

    const removeNullFields = (data: any) =>
      JSON.parse(JSON.stringify(data, (key, value) => (value === null ? undefined : value)));

    if (!classID) {
      const account = await prisma.account.findUnique({
        where: { id: req.user.id },
        select: {
          saveSummary: {
            select: {
              id: true, text: true, imageLinks: true, imageStorageProvider: true, createdAt: true, routineId: true, // Included provider
              class: { select: { id: true, name: true, instructorName: true } },
              owner: { select: { id: true, username: true, name: true, image: true } },
            },
            skip: (Number(page) - 1) * Number(limit),
            take: Number(limit),
          },
        },
      });

      totalCount = await prisma.summary.count({ where: { savedAccountId: req.user.id } });
      summaries = account?.saveSummary?.map(removeNullFields) ?? [];
    } else {
      const classInstance = await prisma.class.findUnique({ where: { id: classID } });
      if (!classInstance) return res.status(404).json({ message: "Class not found" });

      totalCount = await prisma.summary.count({ where: { classId: classID } });

      summaries = await prisma.summary.findMany({
        where: { classId: classID },
        include: {
          owner: { select: { id: true, username: true, name: true, image: true } },
          class: { select: { id: true, name: true, instructorName: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
      });

      summaries = summaries.map(removeNullFields);
    }

    return res.status(200).json({
      message: classID ? "Summaries fetched successfully" : "Saved summaries fetched successfully",
      summaries,
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / Number(limit)),
      totalCount,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "An error occurred" });
  }
};

//*********************************************************************************/
//--------------------------- -SUMMARY STATUS  --------------------------------------/
//********************************************************************************/
export const summary_status = async (req: any, res: Response) => {
  try {
    const { summaryID } = req.params;
    const { id: userId } = req.user;

    if (!summaryID || !userId) return res.status(400).json({ message: "Missing required parameters." });

    const foundSummary = await prisma.summary.findUnique({
      where: { id: summaryID },
      include: { routine: true },
    });

    if (!foundSummary) return res.status(404).json({ message: "Summary not found." });

    const { ownerId, routineId } = foundSummary;

    const routineMember = await prisma.routineMember.findFirst({
      where: { routineId, accountId: userId },
    });

    const summaryOwner = ownerId === userId;
    const isOwner = routineMember?.owner ?? false;
    const isCaptain = routineMember?.captain ?? false;

    const isSummarySaved = Boolean(
      await prisma.summary.findFirst({
        where: { id: summaryID, savedAccountId: userId },
      })
    );

    return res.status(200).json({ summaryOwner, isOwner, isCaptain, isSummarySaved });
  } catch (error) {
    console.error("Error in summary_status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//*************************************************************************************/
//--------------------------------- saveUnsaveSummary ----------------------------------/
//*************************************************************************************/
export const saveUnsaveSummary = async (req: any, res: Response) => {
  // (Unchanged logic)
  try {
    const { save, summaryId } = req.body;
    const { id } = req.user;

    const foundSummary = await prisma.summary.findUnique({ where: { id: summaryId } });
    if (!foundSummary) return res.status(404).json({ message: 'Summary not found' });

    switch (save) {
      case 'true':
        const isSaved = await prisma.account.findFirst({
          where: { id: id, saveSummary: { some: { id: summaryId } } },
        });
        if (isSaved) return res.status(409).json({ message: 'Summary already saved' });

        await prisma.account.update({
          where: { id: id },
          data: { saveSummary: { connect: { id: summaryId } } },
        });
        return res.status(200).json({ message: 'Summary saved successfully', save: true });

      case 'false':
        const ifSaved = await prisma.account.findFirst({
          where: { id: id, saveSummary: { some: { id: summaryId } } },
        });
        if (!ifSaved) return res.status(404).json({ message: 'Saved summary not found' });

        await prisma.account.update({
          where: { id: id },
          data: { saveSummary: { disconnect: { id: summaryId } } },
        });
        return res.status(200).json({ message: 'Summary unsaved successfully', save: false });

      default:
        return res.status(400).json({ message: 'Save condition is required' });
    }
  } catch (error: any) {
    console.error('Error:', error);
    return res.status(500).json({ message: error.message });
  }
};

//*************************************************************************************/
//--------------------------------- Remove Summary ----------------------------------/
//*************************************************************************************/
export const removeSummary = async (req: any, res: Response) => {
  const { summaryID } = req.params;
  const findSummary = req.findSummary;

  try {
    await prisma.$transaction(async (tx) => {
      await tx.summary.delete({ where: { id: summaryID } });
    });

    for (const imageLink of findSummary.imageLinks ?? []) {
      // 🔥 FIXED: Since imageLink is now JUST the s3Key, no need to split it!
      const s3Key = imageLink;

      try {
        await minioS3Client.send(
          new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: s3Key,
          })
        );
      } catch (deleteError) {
        console.error(`❌ Failed to delete object: ${s3Key}`, deleteError);
      }
    }

    return res.status(200).json({ message: "Summary deleted successfully." });

  } catch (error: any) {
    console.error("Error in removeSummary handler:", error);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};