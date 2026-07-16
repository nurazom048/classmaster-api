import { Request, Response } from 'express';
import Notification from '../models/notification.model';
import { uploadFile, deleteFile } from '../../../utils/bucket';

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

        // Create a new notification
        const notification = new Notification({
            accountID,
            title,
            body,
            imageUrl,
            rutineID,
            NoticeID,
            type,
        });

        // Save the notification to the database
        const savedNotification = await notification.save();

        res.status(200).json({ message: 'Notification created successfully', notification: savedNotification });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create notification', error: error.message });
    }
};

// Delete a notification by ID
export const deleteNotification = async (req: Request, res: Response) => {
    try {
        const { notificationId } = req.params;

        // Find the notification by ID
        const notification = await Notification.findById(notificationId);
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
        await notification.deleteOne();

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
        const totalCount = await Notification.countDocuments();
        const totalPages = Math.ceil(totalCount / limit);

        const notifications = await Notification.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

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
