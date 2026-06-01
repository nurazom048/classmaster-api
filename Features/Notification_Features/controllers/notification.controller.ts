import { Request, Response } from 'express';
import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import Notification from '../models/notification.model';
import { minioS3Client, BUCKET_NAME, MINIO_ENDPOINT } from '../../../services/storage/storage.minio.config';

// Create a notification
export const createNotification = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        // Request body থেকে ডেটা নেওয়া
        const { accountID, title, body, rutineID, routineID, NoticeID, type } = req.body;
        const image = req.file;

        // ভ্যালিডেশন
        if (!title || !body || !type) {
            return res.status(400).json({ message: 'Please fill in all the required fields' });
        }

        let imageUrl;

        if (image) {
            const timestamp = Date.now();
            const filename = `${accountID}-${timestamp}-${image.originalname}`;

            // 📁 তোমার দেওয়া নির্দিষ্ট পাথ: notification/prmptions
            const s3Key = `notification/prmptions/${filename}`;

            // S3 / MinIO তে ফাইল আপলোডের কমান্ড
            await minioS3Client.send(
                new PutObjectCommand({
                    Bucket: BUCKET_NAME,
                    Key: s3Key,
                    Body: image.buffer,
                    ContentType: image.mimetype,
                })
            );

            // আপলোড হওয়া ফাইলের পাবলিক URL জেনারেট করা
            imageUrl = `${MINIO_ENDPOINT}/${BUCKET_NAME}/${s3Key}`;
        }

        // ডাটাবেজে সেভ করার অবজেক্ট তৈরি
        const notification = new Notification({
            accountID,
            title,
            body,
            imageUrl,
            rutineID,
            NoticeID,
            type,
        });

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

        const notification = await Notification.findById(notificationId);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        // S3 / MinIO থেকে ইমেজ ডিলিট করা
        if (notification.imageUrl) {
            // URL থেকে ফাইলের ইউনিক নাম এবং পাথ (S3 Key) এক্সট্র্যাক্ট করার ট্রিক
            const urlParts = notification.imageUrl.split('notification/prmptions/');
            if (urlParts.length > 1) {
                const filename = urlParts[1];
                const s3Key = `notification/prmptions/${filename}`;

                await minioS3Client.send(
                    new DeleteObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key: s3Key,
                    })
                );
            }
        }

        // ডাটাবেজ থেকে রিমুভ করা
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
    const limit = parseInt(req.query.limit as string) || 10;
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