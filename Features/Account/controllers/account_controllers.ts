import bcrypt from 'bcrypt';
import { Response } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';
import {
  uploadAccountImageToMinIO,
  deleteAccountImageFromMinIO
} from '../helper/account.minio.helper';
import { getAccountImagePath } from '../../../services/storage/stroage.path';

// Admin initialized as required for other authentication actions
const admin = require('firebase-admin');

//**********************************************************************************************/
// ---------------------------------Edit Account --------------------------------------------/
//**********************************************************************************************/

export const edit_account = async (req: any, res: Response) => {
  const { name, username, about } = req.body;

  try {
    // Step 1: Fetch the current account details
    const account = await prisma.account.findUnique({ where: { id: req.user.id } });
    if (!account) return res.status(404).json({ message: 'Account not found' });

    // Step 2: Handle the cover image update
    const coverImageFile = req.files?.['coverImage'] ? req.files['coverImage'][0] : null;
    let coverImagePath = account.coverImage;
    let coverImageProvider = account.coverImageStorageProvider || null;

    if (coverImageFile) {
      // Safe check: If an old image exists and was stored in MinIO ('aws'), delete it first
      if (account.coverImage && account.coverImageStorageProvider === 'aws') {
        await deleteAccountImageFromMinIO(account.coverImage);
      }

      // Generate a new clean key path
      coverImagePath = getAccountImagePath(account.id, 'coverImage', coverImageFile.originalname);

      // Upload the file using the clean key
      await uploadAccountImageToMinIO(coverImageFile, coverImagePath);
      coverImageProvider = 'aws'; // Set provider to 'aws' for MinIO
    } else if (!coverImagePath) {
      coverImageProvider = null;
    }

    // Step 3: Handle the profile image update
    const profileImageFile = req.files?.['image'] ? req.files['image'][0] : null;
    let profileImagePath = account.image;
    let profileImageProvider = account.imageStorageProvider || null;

    if (profileImageFile) {
      // Safe check: If an old profile image exists and was stored in MinIO ('aws'), delete it first
      if (account.image && account.imageStorageProvider === 'aws') {
        await deleteAccountImageFromMinIO(account.image);
      }

      // Generate a new clean key path
      profileImagePath = getAccountImagePath(account.id, 'image', profileImageFile.originalname);

      // Upload the file using the clean key
      await uploadAccountImageToMinIO(profileImageFile, profileImagePath);
      profileImageProvider = 'aws'; // Set provider to 'aws' for MinIO
    } else if (!profileImagePath) {
      profileImageProvider = null;
    }

    // Step 4: Update account details in the database (only storing paths as keys)
    const updatedAccount = await prisma.account.update({
      where: { id: req.user.id },
      data: {
        name,
        username,
        about,
        coverImage: coverImagePath,
        coverImageStorageProvider: coverImageProvider as any,
        image: profileImagePath,
        imageStorageProvider: profileImageProvider as any,
      },
    });

    console.log("Account updated with relative image paths successfully.");

    // JSON response layout is identical to original, ensuring Flutter client compatibility
    return res.status(200).json({
      message: 'Account updated successfully',
      updatedAccount,
    });

  } catch (err: any) {
    console.error("Failed to edit account:", err);
    return res.status(500).json({ message: 'Failed to update account', error: err.message });
  }
};

//**********************************************************************************************/
// ---------------------------------Search Account--------------------------------------------/
//**********************************************************************************************/
export const searchAccounts = async (req: any, res: Response) => {
  const { q: searchQuery = '', page = 1, limit = 10 } = req.query;

  try {
    const currentPage = parseInt(page as string, 10) || 1;
    const pageSize = parseInt(limit as string, 10) || 10;

    const searchConditions: any = searchQuery
      ? {
        OR: [
          { username: { contains: searchQuery, mode: 'insensitive' } },
          { name: { contains: searchQuery, mode: 'insensitive' } },
        ],
      }
      : {};

    const totalCount = await prisma.account.count({
      where: searchConditions,
    });

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
  try {
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

    const filteredUser = Object.fromEntries(
      Object.entries(user).filter(([_, value]) => value !== null)
    );

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
    const account = await prisma.accountData.findUnique({
      where: { ownerAccountId: id },
      select: { password: true },
    });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    if (!account.password) {
      return res.status(400).json({ message: "Password not set for this account" });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, account.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await admin.auth().updateUser(id, { password: newPassword });

    await prisma.accountData.update({
      where: { ownerAccountId: id },
      data: { password: hashedPassword },
    });

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
    if (!email) return res.status(400).json({ message: "Please fill the form" });
    res.status(200).json({ message: "Password changed successfully", email: email });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Error changing password" });
  }
};