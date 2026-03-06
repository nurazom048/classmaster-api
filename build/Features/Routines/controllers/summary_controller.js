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
exports.removeSummary = exports.saveUnsaveSummary = exports.summary_status = exports.get_class_summary_list = exports.addSummary = void 0;
//! firebase
const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } = require('firebase/storage');
const firebase_storage = require("../../../config/firebase/firebase_storage");
initializeApp(firebase_storage.firebaseConfig); // Initialize Firebase
// Get a reference to the Firebase storage bucket
const storage = getStorage();
// prisma
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
const routines_firebase_1 = require("../firebase/routines.firebase");
//
//
//
//*********************************************************************************/
//--------------------------- -add summary  --------------------------------------/
//********************************************************************************/
// Helper function to check file MIME types and upload summaries
const addSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, checkedType } = req.body;
    const { classID } = req.params;
    const { id } = req.user;
    const { routineID } = req;
    try {
        let imageStorageProvider = null;
        // Step 1: Upload images to Firebase Storage
        const downloadUrls = yield (0, routines_firebase_1.summaryImageUploader)({
            files: req.files,
            classId: classID,
            routineID,
        });
        // Determine image storage provider if images are uploaded
        if (downloadUrls.length > 0) {
            imageStorageProvider = 'firebase';
        }
        // Step 2: Perform database operations in a transaction
        const createdSummary = yield prisma_clint_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const summary = yield tx.summary.create({
                data: {
                    ownerId: id,
                    text: (message === null || message === void 0 ? void 0 : message.trim()) === "" && downloadUrls.length > 0 ? '' : message,
                    imageLinks: downloadUrls,
                    imageStorageProvider,
                    routineId: routineID,
                    classId: classID,
                },
            });
            // Update routine's updatedAt field
            yield tx.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });
            return summary;
        }));
        // Step 3: Send success response
        return res.status(201).json({
            message: 'Summary created successfully',
            summary: createdSummary,
        });
    }
    catch (error) {
        console.error('Error creating summary:', error);
        return res.status(500).json({ message: 'Server error occurred' });
    }
});
exports.addSummary = addSummary;
//***************************************************************************************/
//--------------------------- -Get class summary list  ----------------------------------/
//**************************************************************************************/
//## Here you can get saved summary or summary by class ID// Fetch and list class summaries or saved summaries for an account
const get_class_summary_list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { classID } = req.params;
    const { page = 1, limit = 10 } = req.query;
    try {
        let summaries = [];
        let totalCount = 0;
        // Helper function to remove fields with null values
        const removeNullFields = (data) => JSON.parse(JSON.stringify(data, (key, value) => (value === null ? undefined : value)));
        if (!classID) {
            // Fetch saved summaries for the logged-in account
            const account = yield prisma_clint_1.default.account.findUnique({
                where: { id: req.user.id },
                select: {
                    saveSummary: {
                        select: {
                            id: true,
                            text: true,
                            imageLinks: true,
                            createdAt: true,
                            routineId: true,
                            class: { select: { id: true, name: true, instructorName: true } },
                            owner: { select: { id: true, username: true, name: true, image: true } },
                        },
                        skip: (Number(page) - 1) * Number(limit),
                        take: Number(limit),
                    },
                },
            });
            totalCount = yield prisma_clint_1.default.summary.count({ where: { savedAccountId: req.user.id } });
            summaries = (_b = (_a = account === null || account === void 0 ? void 0 : account.saveSummary) === null || _a === void 0 ? void 0 : _a.map(removeNullFields)) !== null && _b !== void 0 ? _b : [];
        }
        else {
            // Fetch summaries for a specific class
            const classInstance = yield prisma_clint_1.default.class.findUnique({ where: { id: classID } });
            if (!classInstance)
                return res.status(404).json({ message: "Class not found" });
            totalCount = yield prisma_clint_1.default.summary.count({ where: { classId: classID } });
            summaries = yield prisma_clint_1.default.summary.findMany({
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
    }
    catch (error) {
        return res.status(400).json({ message: error.message || "An error occurred" });
    }
});
exports.get_class_summary_list = get_class_summary_list;
//************* SUMMARY STATUS ********************/
const summary_status = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { summaryID } = req.params;
        const { id: userId } = req.user;
        if (!summaryID || !userId) {
            return res.status(400).json({ message: "Missing required parameters." });
        }
        // Fetch summary and related routine details
        const foundSummary = yield prisma_clint_1.default.summary.findUnique({
            where: { id: summaryID },
            include: { routine: true },
        });
        if (!foundSummary)
            return res.status(404).json({ message: "Summary not found." });
        const { ownerId, routineId } = foundSummary;
        // Determine user roles and permissions
        const routineMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId, accountId: userId },
        });
        const summaryOwner = ownerId === userId;
        const isOwner = (_a = routineMember === null || routineMember === void 0 ? void 0 : routineMember.owner) !== null && _a !== void 0 ? _a : false;
        const isCaptain = (_b = routineMember === null || routineMember === void 0 ? void 0 : routineMember.captain) !== null && _b !== void 0 ? _b : false;
        // Check if the summary is saved by the user
        const isSummarySaved = Boolean(yield prisma_clint_1.default.summary.findFirst({
            where: { id: summaryID, savedAccountId: userId },
        }));
        // Response with status and roles
        return res.status(200).json({
            summaryOwner,
            isOwner,
            isCaptain,
            isSummarySaved,
        });
    }
    catch (error) {
        console.error("Error in summary_status:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.summary_status = summary_status;
//*************************************************************************************/
//--------------------------------- saveUnsaveSummary ----------------------------------/
//*************************************************************************************/
const saveUnsaveSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { save, summaryId } = req.body;
        const { id } = req.user;
        // Find the summary by ID
        const foundSummary = yield prisma_clint_1.default.summary.findUnique({
            where: { id: summaryId },
        });
        if (!foundSummary) {
            return res.status(404).json({ message: 'Summary not found' });
        }
        switch (save) {
            case 'true':
                // Check if the summary is already saved by the user
                const isSaved = yield prisma_clint_1.default.account.findFirst({
                    where: {
                        id: id, // Make sure to use the user's ID
                        saveSummary: {
                            some: { id: summaryId }, // Check if summary is in the saveSummary relation
                        },
                    },
                });
                if (isSaved) {
                    return res.status(409).json({ message: 'Summary already saved' });
                }
                // Create a new SaveSummary document
                yield prisma_clint_1.default.account.update({
                    where: { id: id },
                    data: {
                        saveSummary: {
                            connect: { id: summaryId }, // Connect the saved summary to the account
                        },
                    },
                });
                return res.status(200).json({
                    message: 'Summary saved successfully',
                    save: true,
                });
            case 'false':
                // Check if the summary is saved by the user
                const ifSaved = yield prisma_clint_1.default.account.findFirst({
                    where: {
                        id: req.user.id,
                        saveSummary: {
                            some: { id: summaryId },
                        },
                    },
                });
                if (!ifSaved) {
                    return res.status(404).json({ message: 'Saved summary not found' });
                }
                // Remove the saved summary
                yield prisma_clint_1.default.account.update({
                    where: { id: id },
                    data: {
                        saveSummary: {
                            disconnect: { id: summaryId }, // Disconnect the saved summary from the account
                        },
                    },
                });
                return res.status(200).json({
                    message: 'Summary unsaved successfully',
                    save: false,
                });
            default:
                return res.status(400).json({ message: 'Save condition is required' });
        }
    }
    catch (error) {
        console.error('Error:', error); // Add logging for debugging
        return res.status(500).json({ message: error.message });
    }
});
exports.saveUnsaveSummary = saveUnsaveSummary;
//*************************************************************************************/
//--------------------------------- Remove Summary ----------------------------------/
//*************************************************************************************/
const removeSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { summaryID } = req.params;
    const findSummary = req.findSummary; // Use the summary data from middleware
    try {
        // Transaction: Delete save records and remove the summary
        yield prisma_clint_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Delete the summary record
            yield tx.summary.delete({ where: { id: summaryID } });
        }));
        // Remove images from Firebase storage if any exist
        for (const imageLink of (_a = findSummary.imageLinks) !== null && _a !== void 0 ? _a : []) {
            const fileRef = ref(storage, imageLink);
            yield deleteObject(fileRef);
        }
        return res.status(200).json({ message: "Summary deleted successfully." });
    }
    catch (error) {
        console.error("Error in remove_summary handler:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
});
exports.removeSummary = removeSummary;
