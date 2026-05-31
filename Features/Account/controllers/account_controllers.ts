import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';

//? firebase
import { initializeApp, getApp } from 'firebase/app';
const { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } = require('firebase/storage');
import { firebaseConfig } from "../../../config/firebase/firebase_storage";
import prisma from '../../../prisma/schema/prisma.clint';
import { printD } from '../../../utils/utils';
import { s3Client } from '../../../services/storage/storage.mino.s3';
import { DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
const storage = getStorage();

// Initialize Firebase
initializeApp(firebaseConfig);

//file compressino 
import sharp from 'sharp';

// Firebase auth
const admin = require('firebase-admin');
const { auth } = require("firebase-admin");
// const { use } = require('../../routes/account_route');



//**********************************************************************************************/
// ---------------------------------Edit Account --------------------------------------------/
//**********************************************************************************************/
export const edit_account = async (req: any, res: Response) => {
  const { name, username, about, email } = req.body;

  try {
    // Step 1: Fetch the current account details
    const account = await prisma.account.findUnique({ where: { id: req.user.id } });
    if (!account) return res.status(404).json({ message: 'Account not found' });

    // 🟢 নতুন ইউজারনেম চেক: যদি ইউজার তার ইউজারনেম চেঞ্জ করে, তবে চেক করবে সেটা অন্য কেউ নিয়েছে কিনা
    if (username && username !== account.username) {
      const usernameAlreadyTaken = await prisma.account.findUnique({
        where: { username },
      });
      if (usernameAlreadyTaken) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
    }

    const bucketName = "storageforclassmaster"; // MinIO Bucket

    // Step 2: Handle the cover image update
    const coverImage = req.files?.['cover'] ? req.files['cover'][0] : null;
    let coverImageURL = account.coverImage;
    let coverImageProvider = account.coverImageStorageProvider || null;

    if (coverImage) {
      // Compress Cover Image using Sharp
      const compressedCoverBuffer = await sharp(coverImage.buffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      const timestamp = Date.now();
      const filename = `${username || account.username}-${name || account.name}-${timestamp}-cover.webp`;
      const s3Key = `ID-${account.id}/mages/cover/${filename}`

      const uploadParams = {
        Bucket: bucketName,
        Key: s3Key,
        Body: compressedCoverBuffer,
        ContentType: 'image/webp',
      };

      await s3Client.send(new PutObjectCommand(uploadParams));
      coverImageURL = s3Key;
      coverImageProvider = 'aws';

      if (account.coverImage && account.coverImageStorageProvider === 'aws') {
        const deleteParams = { Bucket: bucketName, Key: account.coverImage };
        await s3Client.send(new DeleteObjectCommand(deleteParams)).catch(() => console.log('Old cover image not found'));
      }
    } else if (!coverImageURL) {
      coverImageProvider = null;
    }

    // Step 3: Handle the profile image update
    const profileImage = req.files?.['image'] ? req.files['image'][0] : null;
    let profileImageURL = account.image;
    let profileImageProvider = account.imageStorageProvider || null;

    if (profileImage) {
      // Compress Profile Image using Sharp
      const compressedProfileBuffer = await sharp(profileImage.buffer)
        .resize({ width: 500, height: 500, fit: 'cover' })
        .webp({ quality: 80 })
        .toBuffer();

      const timestamp = Date.now();
      const filename = `${username || account.username}-${name || account.name}-${timestamp}-profile.webp`;
      const s3Key = `ID-${account.id}/mages/profile/${filename}`;

      const uploadParams = {
        Bucket: bucketName,
        Key: s3Key,
        Body: compressedProfileBuffer,
        ContentType: 'image/webp',
      };

      await s3Client.send(new PutObjectCommand(uploadParams));
      profileImageURL = s3Key;
      profileImageProvider = 'aws';

      if (account.image && account.imageStorageProvider === 'aws') {
        const deleteParams = { Bucket: bucketName, Key: account.image };
        await s3Client.send(new DeleteObjectCommand(deleteParams)).catch(() => console.log('Old profile image not found'));
      }
    } else if (!profileImageURL) {
      profileImageProvider = null;
    }

    // Step 4: Update account details in the database
    const updatedAccount = await prisma.account.update({
      where: { id: req.user.id },
      data: {
        name,
        username,
        about,
        coverImage: coverImageURL,
        coverImageStorageProvider: coverImageProvider,
        image: profileImageURL,
        imageStorageProvider: profileImageProvider,
      },
    });

    return res.status(200).json({
      message: 'Account updated successfully',
      updatedAccount,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to update account', error: err });
  }
}
//**********************************************************************************************/
// ---------------------------------Search Account--------------------------------------------/
//**********************************************************************************************/
export const searchAccounts = async (req: any, res: Response) => {
  const { q: searchQuery = '', page = 1, limit = 10 } = req.query;

  try {
    // Ensure pagination values are numbers
    const currentPage = parseInt(page as string, 10) || 1;
    const pageSize = parseInt(limit as string, 10) || 10;

    // Prepare search conditions for username and name
    const searchConditions: any = searchQuery
      ? {
        OR: [
          { username: { contains: searchQuery, mode: 'insensitive' } },
          { name: { contains: searchQuery, mode: 'insensitive' } },
        ],
      }
      : {};

    // Count total matching accounts
    const totalCount = await prisma.account.count({
      where: searchConditions,
    });

    // Fetch paginated results
    const accounts = await prisma.account.findMany({
      where: searchConditions,
      select: {
        id: true,
        username: true,
        name: true,
        image: true,
      },
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });

    if (accounts.length === 0) {
      return res.status(404).json({ message: 'No accounts found' });
    }

    // Respond with paginated results
    res.status(200).json({
      accounts,
      currentPage,
      totalPages: Math.ceil(totalCount / pageSize),
      totalCount,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Failed to search accounts', error: error.message });
  }
};



//........ View my account ...//
export const view_my_account = async (req: any, res: Response) => {
  console.log('view_my_account')
  try {
    // Fetch user account data
    const user = await prisma.account.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        username: true,
        name: true,
        about: true,
        isVerified: true,
        image: true,
        imageStorageProvider: true,
        coverImage: true,
        coverImageStorageProvider: true,
        accountType: true,
        lastLoginTime: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) return res.status(404).json({ message: "Account not found" });

    // Remove null fields from the response
    const filteredUser = Object.fromEntries(
      Object.entries(user).filter(([_, value]) => value !== null)
    );

    console.log(filteredUser);
    return res.status(200).json(filteredUser);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};



//....view others Account...//


export const viewOthersAccount = async (req: any, res: Response) => {
  const { username } = req.params;

  try {
    // Fetch user account and routines
    const user = await prisma.account.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        name: true,
        about: true,
        isVerified: true,
        image: true,
        imageStorageProvider: true,
        coverImage: true,
        coverImageStorageProvider: true,
        accountType: true,
        lastLoginTime: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Remove null fields from the response
    const filteredUser = Object.fromEntries(
      Object.entries(user).filter(([_, value]) => value !== null)
    );
    return res.status(200).json(filteredUser);
  } catch (error: any) {
    console.error("Error fetching account data:", error);
    return res.status(500).json({ message: "Error getting routines" });
  }
};
//************************************************************************** */
// ---------------------    changePassword   --------------------------------/
//************************************************************************** */


export const changePassword = async (req: any, res: Response) => {
  const { id } = req.user;
  const { oldPassword, newPassword } = req.body;

  try {
    // Step 1: Retrieve the account and account data
    const account = await prisma.accountData.findUnique({
      where: { ownerAccountId: id },
      select: { password: true },
    });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Ensure the password is defined
    if (!account.password) {
      return res.status(400).json({ message: "Password not set for this account" });
    }

    // Step 2: Compare old password
    const passwordMatch = await bcrypt.compare(oldPassword, account.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    // Step 3: Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);


    // Step 4: Update password in Firebase
    await admin.auth().updateUser(id, { password: newPassword });

    // Step 5: Update password in the database
    await prisma.accountData.update({
      where: { ownerAccountId: id },
      data: { password: hashedPassword },
    });

    // Step 4: Send response
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Error changing password" });
  }
};


// *****************     forgetPassword      *******************************/
export const forgetPassword = async (req: any, res: Response) => {
  const { email, phone, username } = req.body;

  try {
    if (!email && !username) return res.status(400).json({ message: "Please fill the form" });
    // TODO forget password by firebase forget password link email send
    // // Find the account by ID
    // const account = await Account.findOne({ $or: [{ email: email }, { phone: phone }, { username: username }] });
    // if (!account) return res.status(400).json({ message: "username or email is not valid" });



    // Update the password
    // // Update the password on Firebase
    // const User =   await auth().
    // User.

    // await account.save();

    // Send response
    res.status(200).json({ message: "Password changed successfully", email: email });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Error changing password" });
  }
};
