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
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryImageUploader = exports.deleteRoutineMediaFolder = void 0;
//! firebase
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
// import { firebaseConfig } from "../../../config/firebase/firebase_storage";
const firebase_storage_1 = require("../../../config/firebase/firebase_storage");
(0, app_1.initializeApp)(firebase_storage_1.firebaseConfig); // Initialize Firebase
// Get a reference to the Firebase storage bucket
const storage = (0, storage_1.getStorage)();
//@deleteRoutineMediaFolder
const deleteRoutineMediaFolder = (routineID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Define the folder path to delete
        const folderRef = (0, storage_1.ref)(storage, `summary/routineID-${routineID}`);
        // List all items (files and folders) in the folder
        const folderContents = yield (0, storage_1.listAll)(folderRef);
        // Loop through each file and delete it
        const deletePromises = folderContents.items.map((fileRef) => (0, storage_1.deleteObject)(fileRef));
        // Wait for all delete operations to complete
        yield Promise.all(deletePromises);
        console.log(`All files in routineID-${routineID} deleted successfully.`);
    }
    catch (error) {
        console.error("Error deleting media files:", error);
    }
});
exports.deleteRoutineMediaFolder = deleteRoutineMediaFolder;
// Upload summary's to Firebase Storage
const summaryImageUploader = (_a) => __awaiter(void 0, [_a], void 0, function* ({ files, classId, routineID }) {
    const downloadUrls = [];
    const newImageFileNames = [];
    const timestamp = Date.now();
    for (let i = 0; i < files.length; i++) {
        const filename = `${timestamp}-${i}-${files[i].originalname}`;
        newImageFileNames.push(filename);
        const fileRef = (0, storage_1.ref)(storage, `summary/routineID-${routineID}/classID-${classId}/files/${filename}`);
        const metadata = { contentType: files[i].mimetype };
        yield (0, storage_1.uploadBytes)(fileRef, files[i].buffer, metadata);
    }
    for (let i = 0; i < newImageFileNames.length; i++) {
        const fileRef = (0, storage_1.ref)(storage, `summary/routineID-${routineID}/classID-${classId}/files/${newImageFileNames[i]}`);
        try {
            const url = yield (0, storage_1.getDownloadURL)(fileRef);
            downloadUrls.push(url);
        }
        catch (error) {
            console.log(error);
            downloadUrls.push('');
        }
    }
    return downloadUrls;
});
exports.summaryImageUploader = summaryImageUploader;
