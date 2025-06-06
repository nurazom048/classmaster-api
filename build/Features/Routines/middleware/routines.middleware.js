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
exports.validateSummaryAddRequest = exports.createRoutineValidation = void 0;
// imports models
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
// WEEKDAY validation
// Middleware to validate the request body for creating a routine
const createRoutineValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({ message: "The 'name' field is required and must be a non-empty string." });
    }
    next(); // Proceed to the next middleware or route handler
};
exports.createRoutineValidation = createRoutineValidation;
//@ Middleware to validate request and class existence
const validateSummaryAddRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, checkedType } = req.body;
    const { classID } = req.params;
    try {
        // Step 1: Validate input
        if (!(message === null || message === void 0 ? void 0 : message.trim()) && req.files.length === 0 && !checkedType) {
            return res.status(400).send({
                message: 'Message is required, or at least one image must be uploaded.',
            });
        }
        // Step 2: Check if class exists
        const findClass = yield prisma_clint_1.default.class.findUnique({
            where: { id: classID },
        });
        if (!findClass) {
            return res.status(404).send({ message: 'Class not found' });
        }
        req.routineID = findClass.routineId;
        // Step 3: Validate file MIME types if files are uploaded
        const allowedMimeTypes = ['image/jpeg', 'image/png'];
        const invalidFiles = req.files.filter((file) => !allowedMimeTypes.includes(file.mimetype));
        if (invalidFiles.length > 0 && !checkedType) {
            const invalidFileNames = invalidFiles.map((file) => file.originalname);
            return res.status(400).send({
                message: `Invalid file types: ${invalidFileNames.join(', ')}`,
            });
        }
        // If all checks pass, continue to the next middleware or route handler
        next();
    }
    catch (error) {
        console.error('Error in validateSummaryRequest:', error);
        return res.status(500).send({ message: 'Server error occurred during validation.' });
    }
});
exports.validateSummaryAddRequest = validateSummaryAddRequest;
