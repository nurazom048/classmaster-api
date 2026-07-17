import { Request, Response } from 'express';
import { uploadFile, deleteFile } from '../../../utils/bucket';
import prisma from '../../../prisma/schema/prisma.clint';

// Create a notification
export const createNotification = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        // Retrieve data from the request body
        const { accountID, title, body, rutineID, routineID, NoticeID, type } = req.body;
        const image = req.file;

        // Validate required fields
        if (!title || !body || !type) {
            return res.status(400).json({ message: 'Please fill in all the required fields' });
        }

        let imageUrl;

        if (image) {
            const timestamp = Date.now();
            const filename = `${accountID}-${timestamp}-${image.originalname}`;
            const key = `images/notification/${type}/${filename}`;
            imageUrl = await uploadFile("storageforclassmaster", key, image);
        }

        // Create and save the notification to the database
        const savedNotification = await prisma.notification.create({
            data: {
                accountID: accountID || "",
                title,
                body,
                imageUrl,
                routineID: routineID || rutineID || null,
                NoticeID: NoticeID || null,
                type: type === 'private' ? 'private' : 'public',
            }
        });

        res.status(200).json({ message: 'Notification created successfully', notification: savedNotification });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create notification', error: error.message });
    }
};

// Delete a notification by ID
export const deleteNotification = async (req: Request, res: Response) => {
    try {
        const notificationId = req.params.notificationId as string;

        // Find the notification by ID
        const notification = await prisma.notification.findUnique({
            where: { id: notificationId }
        });
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        // Delete the notification from storage
        if (notification.imageUrl) {
            try {
                await deleteFile("storageforclassmaster", notification.imageUrl);
            } catch (storageErr) {
                console.error("Error deleting notification file from storage:", storageErr);
            }
        }

        // Remove the notification from the database
        await prisma.notification.delete({
            where: { id: notificationId }
        });

        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete notification', error: error.message });
    }
};

// Get all notifications and sort by creation date
export const getAllNotifications = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10; // Adjust the limit as per your requirements
    try {
        const totalCount = await prisma.notification.count();
        const totalPages = Math.ceil(totalCount / limit);

        const notifications = await prisma.notification.findMany({
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit
        });

        res.status(200).json({
            notifications,
            currentPage: page,
            totalPages,
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get notifications', error: error.message });
    }
};
