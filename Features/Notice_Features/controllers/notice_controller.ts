import { sendNotificationMethods } from '../../../services/Notification services/oneSignalNotification.controller';
import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../../../prisma/schema/prisma.clint';

import { getNoticeFilePath } from '../../../services/storage/stroage.path';
import { uploadFile, deleteFile, BUCKET_NAME } from '../../../services/storage/storage';

// ============================================================================
// CONTROLLERS
// ============================================================================

// Function to add a new notice and notify relevant members
export const addNotice = async (req: any, res: Response) => {
    const { title, description, mimetypeChecked, category } = req.body;
    const { id, error } = req.user;
    const uuid = uuidv4();

    try {
        // Step 1: Validate required inputs
        if (error) return res.status(400).json({ message: 'PDF file is required' });
        if (!req.file) return res.status(400).json({ message: 'PDF file is required' });
        if (!title) return res.status(400).json({ message: 'title is required' });

        // Step 2: Check file size (Limit: 15 MB)
        if (req.file.size > 15 * 1024 * 1024) {
            return res.status(400).json({ message: 'File size exceeds the allowed limit (15 MB)' });
        }

        // Step 3: Check file type mapping
        const isPdfMime = req.file.mimetype === 'application/pdf' || req.file.mimetype === 'application/x-pdf' || req.file.mimetype === 'application/octet-stream';
        const isPdfExt = req.file.originalname.toLowerCase().endsWith('.pdf');
        if (!mimetypeChecked && (!isPdfMime || !isPdfExt)) {
            return res.status(400).json({ message: 'Only PDF files are allowed' });
        }

        // Step 4: Find Account and check if the account exists
        const findAccount = await prisma.account.findUnique({ where: { id: id } });
        if (!findAccount) return res.status(404).json({ message: 'Account not found' });

        // Step 5: Upload PDF to Storage (MinIO or Cloudflare R2)
        const fileName = getNoticeFilePath(findAccount.id, uuid, req.file.originalname);
        await uploadFile(BUCKET_NAME, fileName, req.file);

        // Step 6: Create Notice in the Prisma database (Saving raw file path)
        const createdNotice = await prisma.notice.create({
            data: {
                title,
                description,
                publisherId: id,
                pdf: fileName,
                category: (category || 'notice') as any,
            },
        });

        // Step 7: Get all noticeboard members who have notifications enabled
        const notificationMembers = await prisma.noticeBoardMember.findMany({
            where: {
                accountId: id,
                notificationOn: true,
            },
            include: {
                account: {
                    select: {
                        accountData: {
                            select: { oneSignalUserId: true },
                        },
                    },
                },
            },
        });

        // Step 8: Map to extract OneSignal User IDs from members
        const oneSignalUserIds = notificationMembers
            .map((member) => member.account.accountData?.oneSignalUserId)
            .filter((userId) => userId !== null && userId !== undefined) as string[];

        // Step 9: Send push notification via OneSignal
        if (oneSignalUserIds.length > 0) {
            await sendNotificationMethods(oneSignalUserIds, `A New Notice from ${findAccount.name}`, "New Notice");
        }

        // Step 10: Return a success response with the created notice
        res.status(200).json({ message: 'Notice created and added successfully', notice: createdNotice });

    } catch (error: any) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteNotice = async (req: any, res: Response) => {
    const { noticeId } = req.params;
    const { id } = req.user;

    try {
        // Step 1: Find user account and verify it exists
        const findAccount = await prisma.account.findUnique({ where: { id: id } });
        if (!findAccount) return res.status(404).json({ message: 'Account not found' });

        // Step 2: Find the requested notice to delete
        const notice = await prisma.notice.findUnique({ where: { id: noticeId } });
        if (!notice) return res.status(404).json({ message: 'Notice not found' });

        // Step 3: Permission Check - Verify this notice belongs to the requesting user
        if (notice.publisherId !== id) {
            return res.status(403).json({ message: 'You do not have permission to delete this notice' });
        }

        // Step 4: Delete the PDF file from the bucket (MinIO or Cloudflare R2)
        if (notice.pdf) {
            try {
                await deleteFile(BUCKET_NAME, notice.pdf);
            } catch (storageError) {
                console.error('Error deleting notice file from storage:', storageError);
            }
        }

        // Step 5: Delete the notice record from the database
        await prisma.notice.delete({ where: { id: noticeId } });

        // Step 6: Return success response
        res.status(200).json({ message: 'Notice deleted successfully' });

    } catch (error: any) {
        console.error('Error deleting notice:', error);
        res.status(500).json({ message: 'Error deleting notice', error: error.message });
    }
};

export const joinNoticeboard = async (req: any, res: Response) => {
    const { academyID } = req.params;
    const { id } = req.user;

    try {
        if (!academyID) return res.status(400).json({ message: 'AcademyID is required' });

        // Step 1: Check if the target academy account exists
        const academyAccount = await prisma.account.findUnique({ where: { id: academyID } });
        if (!academyAccount) return res.status(404).json({ message: 'AcademyAccount not found' });

        // Step 2: Check if the user is already a member of this academy
        const existingMember = await prisma.noticeBoardMember.findFirst({
            where: { accountId: academyID, memberId: id }
        });
        if (existingMember) return res.status(409).json({ message: 'You are already a member' });

        // Step 3: Create a new membership record in the database
        await prisma.noticeBoardMember.create({
            data: { accountId: academyID, memberId: id },
        });

        // Step 4: Respond with success message
        res.status(200).json({ message: 'You are now a member of this noticeboard' });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const leaveMember = async (req: any, res: Response) => {
    const { academyID } = req.params;
    const { id } = req.user;

    try {
        if (!academyID) return res.status(400).json({ message: 'AcademyID is required' });

        // Step 1: Check if the academy account exists
        const findAcademy = await prisma.account.findUnique({ where: { id: academyID } });
        if (!findAcademy) return res.status(404).json({ message: 'Account not found' });

        // Step 2: Verify the user is actually a member of the academy
        const alreadyMember = await prisma.noticeBoardMember.findFirst({
            where: { accountId: academyID, memberId: id }
        });
        if (!alreadyMember) return res.status(404).json({ message: 'You are not a member of this academy' });

        // Step 3: Delete the member record from the noticeboard
        await prisma.noticeBoardMember.delete({
            where: { id: alreadyMember.id }
        });

        // Step 4: Respond with success
        res.status(200).json({ message: 'Successfully left the noticeboard' });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const recentNotice = async (req: any, res: Response) => {
    const { page, limit = 10, category } = req.query;

    try {
        let academyIDs: string[] = [];

        if (!req.isGuest) {
            const { id } = req.user;
            // Step 1: Fetch all noticeboards the user has joined
            const allJoinedNoticeBoard = await prisma.noticeBoardMember.findMany({
                where: { memberId: id },
                select: { accountId: true },
            });

            // Step 2: Extract the raw Academy IDs into an array
            academyIDs = allJoinedNoticeBoard.map((item) => item.accountId);
        }

        // 🎯 FIX: 'null', 'undefined' বা ভুল ইনপুট ডিফেন্সিভ পার্সিং লেয়ার
        let parsedPage = parseInt(page as string, 10);
        if (isNaN(parsedPage) || parsedPage < 1) {
            parsedPage = 1;
        }

        let parsedLimit = parseInt(limit as string, 10);
        if (isNaN(parsedLimit) || parsedLimit < 1) {
            parsedLimit = 10;
        }

        const skip = (parsedPage - 1) * parsedLimit;

        const whereClause: any = {};
        if (!req.isGuest) {
            whereClause.publisherId = { in: academyIDs };
        }
        if (category && category !== 'all') {
            whereClause.category = category;
        }

        // Step 3: Count total matching notices for pagination calculation
        const count = await prisma.notice.count({
            where: whereClause,
        });
        const totalPages = Math.ceil(count / parsedLimit);

        // Step 4: Fetch paginated notices including publisher account details
        const notices = await prisma.notice.findMany({
            where: whereClause,
            select: {
                id: true,
                title: true,
                pdf: true,
                description: true,
                category: true,
                publisherId: true,
                createdAt: true,
                updatedAt: true,
                Account: {
                    select: { id: true, name: true, username: true, image: true },
                },
            },
            skip: skip, // 🎯 এখন skip কখনই NaN হবে না
            take: parsedLimit,
            orderBy: { createdAt: 'desc' },
        });

        // Step 5: Clean null properties to undefined for clean response data
        const finalNotices = notices.map((notice) => {
            return {
                ...notice,
                Account: {
                    ...notice.Account,
                    image: notice.Account.image ?? undefined,
                    name: notice.Account.name ?? undefined,
                    username: notice.Account.username ?? undefined,
                },
                description: notice.description ?? undefined,
                pdf: notice.pdf ?? undefined,
            };
        }).filter((notice) => notice.publisherId !== null);

        // Step 6: Return standard paginated response
        console.log(JSON.stringify({
            message: 'Success - All recent notices',
            notices: finalNotices,
            currentPage: parsedPage,
            totalPages,
            totalCount: count,
        }));
        res.status(200).json({
            message: 'Success - All recent notices',
            notices: finalNotices,
            currentPage: parsedPage,
            totalPages,
            totalCount: count,
        });
    } catch (error: any) {
        console.error('Error fetching recent notices:', error);
        res.status(500).json({ message: error.message });
    }
};

// Add this controller function
export const getNoticeById = async (req: Request, res: Response) => {
    const noticeIdParam = req.params.noticeId;
    const noticeId = Array.isArray(noticeIdParam) ? noticeIdParam[0] : noticeIdParam;

    if (!noticeId) {
        return res.status(400).json({ message: 'Notice ID is required' });
    }

    try {
        // Step 1: Find notice by ID, including publisher account info
        const notice = await prisma.notice.findUnique({
            where: { id: noticeId },
            include: {
                Account: {
                    select: { name: true, username: true, image: true }
                }
            }
        });

        // Step 2: Check if notice exists
        if (!notice) {
            return res.status(404).json({ message: "Notice not found" });
        }

        // Step 3: Return success response
        res.status(200).json({ notice });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const recentNoticeByAcademeID = async (req: any, res: Response) => {
    const { academyID } = req.params;
    const { page, limit = 10, category } = req.query;

    try {
        // Step 1: Verify the academy account exists
        const findAccount = await prisma.account.findUnique({ where: { id: academyID } });
        if (!findAccount) return res.status(404).json({ message: "Account not found" });

        // 🎯 FIX: 'null', 'undefined' বা ভুল ইনপুট ডিফেন্সিভ পার্সিং লেয়ার
        let parsedPage = parseInt(page as string, 10);
        if (isNaN(parsedPage) || parsedPage < 1) {
            parsedPage = 1;
        }

        let parsedLimit = parseInt(limit as string, 10);
        if (isNaN(parsedLimit) || parsedLimit < 1) {
            parsedLimit = 10;
        }

        const skip = (parsedPage - 1) * parsedLimit;

        const whereClause: any = { publisherId: academyID };
        if (category && category !== 'all') {
            whereClause.category = category;
        }

        // Step 2: Count total notices for this academy for pagination calculation
        const count = await prisma.notice.count({ where: whereClause });
        const totalPages = Math.ceil(count / parsedLimit);

        // Step 3: Fetch paginated data for the specific academy
        const notices = await prisma.notice.findMany({
            where: whereClause,
            select: {
                id: true,
                title: true,
                description: true,
                category: true,
                pdf: true,
                createdAt: true,
                updatedAt: true,
                publisherId: true,
                Account: { select: { name: true, username: true, image: true } },
            },
            skip: skip, // 🎯 এখন skip কখনই NaN হবে না
            take: parsedLimit,
            orderBy: { createdAt: 'desc' },
        });

        // Step 4: Return formatted paginated response
        res.status(200).json({
            message: "Success",
            notices: notices,
            currentPage: parsedPage,
            totalPages,
            totalCount: count,
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const current_user_status = async (req: any, res: Response) => {
    try {
        const { academyID } = req.params;

        if (req.isGuest) {
            return res.status(200).json({
                message: "Check noticeboard status",
                isOwner: false,
                activeStatus: "not_joined",
                isSave: false,
                notificationOn: false,
            });
        }

        const { id } = req.user;
        let isOwner = false;
        let activeStatus = "not_joined";
        let isSave = false;
        let notificationOn = false;

        // Step 1: Find the academy account
        const academyAccount = await prisma.account.findUnique({ where: { id: academyID } });
        if (!academyAccount) return res.status(404).json({ message: "Academy account not found" });

        // Step 2: Check if the currently logged-in user is a member
        const foundMember = await prisma.noticeBoardMember.findFirst({
            where: { accountId: academyID, memberId: id },
        });

        // Step 3: Check early return if the user is not a member
        if (!foundMember) {
            return res.status(200).json({
                message: "Check noticeboard status",
                isOwner: false,
                isCaptain: false,
                activeStatus: "not_joined",
                isSave: false,
                memberCount: 0,
                sentRequestCount: 0,
                notificationOn: false,
                summaryOwner: false,
                isSummarySaved: false,
            });
        }

        // Step 4: Determine member privileges and notification flags
        activeStatus = "joined";
        if (foundMember.accountId.toString() === id) {
            isOwner = true;
        }
        if (foundMember.notificationOn === true) {
            notificationOn = true;
        }

        // Step 5: Send final response with status
        res.status(200).json({
            message: "Check noticeboard status",
            isOwner,
            activeStatus,
            isSave,
            notificationOn,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const updateNotification = async (req: any, res: Response) => {
    const { academyID } = req.params;
    const { notificationOn } = req.body;
    const { id } = req.user;

    try {
        // Step 1: Find the academy account to ensure it exists
        const academyAccount = await prisma.account.findUnique({ where: { id: academyID } });
        if (!academyAccount) return res.status(404).json({ message: "Academy account not found" });

        // Step 2: Check if the user is a member of this academy's noticeboard
        const foundMember = await prisma.noticeBoardMember.findFirst({ where: { accountId: academyID, memberId: id } });
        if (!foundMember) return res.status(404).json({ message: "You are not a member of this Academy" });

        // Step 3: Prevent unnecessary database calls if state is already equal
        if (foundMember.notificationOn === notificationOn) {
            return res.status(200).json({ message: `Notifications are already ${notificationOn ? 'on' : 'off'}`, notificationOn });
        }

        // Step 4: Update the notificationOn field in the database
        await prisma.noticeBoardMember.update({
            where: { id: foundMember.id },
            data: { notificationOn: notificationOn },
        });

        // Step 5: Respond with success
        res.status(200).json({ message: `Notifications turned ${notificationOn ? 'on' : 'off'}`, notificationOn });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}