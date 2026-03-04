"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgetPassword = exports.changePassword = exports.viewOthersAccount = exports.view_my_account = exports.searchAccounts = exports.edit_account = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
//? firebase
const app_1 = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } = require('firebase/storage');
const firebase_storage_1 = require("../../../config/firebase/firebase_storage");
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
const storage = getStorage();
// Initialize Firebase
(0, app_1.initializeApp)(firebase_storage_1.firebaseConfig);
// Firebase auth
const admin = require('firebase-admin');
const { auth } = require("firebase-admin");
// const { use } = require('../../routes/account_route');
//**********************************************************************************************/
// ---------------------------------Edit Account --------------------------------------------/
//**********************************************************************************************/
const edit_account = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { name, username, about, email } = req.body;
    try {
        // Step 1: Fetch the current account details
        const account = yield prisma_clint_1.default.account.findUnique({ where: { id: req.user.id } });
        if (!account)
            return res.status(404).json({ message: 'Account not found' });
        // Step 2: Handle the cover image update
        const coverImage = ((_a = req.files) === null || _a === void 0 ? void 0 : _a['cover']) ? req.files['cover'][0] : null;
        let coverImageURL = account.coverImage;
        let coverImageProvider = account.coverImageStorageProvider || null;
        if (coverImage) {
            // Upload the cover image to Firebase Storage
            const timestamp = Date.now();
            const filename = `${account.username}-${account.name}-${timestamp}-${coverImage.originalname}`;
            const metadata = { contentType: coverImage.mimetype };
            const coverImageRef = ref(storage, `images/profile/ID-${account.id}/cover/-${filename}`);
            yield uploadBytes(coverImageRef, coverImage.buffer, metadata);
            coverImageURL = yield getDownloadURL(coverImageRef);
            coverImageProvider = 'firebase';
            // Delete the old cover image if it exists
            if (account.coverImage && account.coverImageStorageProvider === 'firebase') {
                const oldCoverImageRef = ref(storage, account.coverImage);
                yield deleteObject(oldCoverImageRef).catch(() => console.log('Old cover image not found'));
            }
        }
        else if (!coverImageURL) {
            // Set cover image provider to null if no image exists
            coverImageProvider = null;
        }
        // Step 3: Handle the profile image update
        const profileImage = ((_b = req.files) === null || _b === void 0 ? void 0 : _b['image']) ? req.files['image'][0] : null;
        let profileImageURL = account.image;
        let profileImageProvider = account.imageStorageProvider || null;
        if (profileImage) {
            // Upload the profile image to Firebase Storage
            const timestamp = Date.now();
            const filename = `${account.username}-${account.name}-${timestamp}-${profileImage.originalname}`;
            const metadata = { contentType: profileImage.mimetype };
            const profileImageRef = ref(storage, `images/profile/ID-${account.id}/profile/-${filename}`);
            yield uploadBytes(profileImageRef, profileImage.buffer, metadata);
            profileImageURL = yield getDownloadURL(profileImageRef);
            profileImageProvider = 'firebase';
            // Delete the old profile image if it exists
            if (account.image && account.imageStorageProvider === 'firebase') {
                const oldProfileImageRef = ref(storage, account.image);
                yield deleteObject(oldProfileImageRef).catch(() => console.log('Old profile image not found'));
            }
        }
        else if (!profileImageURL) {
            // Set profile image provider to null if no image exists
            profileImageProvider = null;
        }
        // Step 4: Update account details in the database
        const updatedAccount = yield prisma_clint_1.default.account.update({
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to update account', error: err });
    }
});
exports.edit_account = edit_account;
//**********************************************************************************************/
// ---------------------------------Search Account--------------------------------------------/
//**********************************************************************************************/
const searchAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q: searchQuery = '', page = 1, limit = 10 } = req.query;
    try {
        // Ensure pagination values are numbers
        const currentPage = parseInt(page, 10) || 1;
        const pageSize = parseInt(limit, 10) || 10;
        // Prepare search conditions for username and name
        const searchConditions = searchQuery
            ? {
                OR: [
                    { username: { contains: searchQuery, mode: 'insensitive' } },
                    { name: { contains: searchQuery, mode: 'insensitive' } },
                ],
            }
            : {};
        // Count total matching accounts
        const totalCount = yield prisma_clint_1.default.account.count({
            where: searchConditions,
        });
        // Fetch paginated results
        const accounts = yield prisma_clint_1.default.account.findMany({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to search accounts', error: error.message });
    }
});
exports.searchAccounts = searchAccounts;
//........ View my account ...//
const view_my_account = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('view_my_account');
    try {
        // Fetch user account data
        const user = yield prisma_clint_1.default.account.findUnique({
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
        if (!user)
            return res.status(404).json({ message: "Account not found" });
        // Remove null fields from the response
        const filteredUser = Object.fromEntries(Object.entries(user).filter(([_, value]) => value !== null));
        console.log(filteredUser);
        return res.status(200).json(filteredUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
});
exports.view_my_account = view_my_account;
//....view others Account...//
const viewOthersAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    try {
        // Fetch user account and routines
        const user = yield prisma_clint_1.default.account.findUnique({
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
        const filteredUser = Object.fromEntries(Object.entries(user).filter(([_, value]) => value !== null));
        return res.status(200).json(filteredUser);
    }
    catch (error) {
        console.error("Error fetching account data:", error);
        return res.status(500).json({ message: "Error getting routines" });
    }
});
exports.viewOthersAccount = viewOthersAccount;
//************************************************************************** */
// ---------------------    changePassword   --------------------------------/
//************************************************************************** */
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { oldPassword, newPassword } = req.body;
    try {
        // Step 1: Retrieve the account and account data
        const account = yield prisma_clint_1.default.accountData.findUnique({
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
        const passwordMatch = yield bcrypt_1.default.compare(oldPassword, account.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Old password is incorrect" });
        }
        // Step 3: Hash the new password
        const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
        // Step 4: Update password in Firebase
        yield admin.auth().updateUser(id, { password: newPassword });
        // Step 5: Update password in the database
        yield prisma_clint_1.default.accountData.update({
            where: { ownerAccountId: id },
            data: { password: hashedPassword },
        });
        // Step 4: Send response
        res.status(200).json({ message: "Password changed successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error changing password" });
    }
});
exports.changePassword = changePassword;
// *****************     forgetPassword      *******************************/
const forgetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, phone, username } = req.body;
    try {
        if (!email && !username)
            return res.status(400).json({ message: "Please fill the form" });
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error changing password" });
    }
});
exports.forgetPassword = forgetPassword;
