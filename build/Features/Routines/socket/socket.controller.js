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
exports.registerSummaryHandlers = void 0;
const socket_server_1 = require("../../../socket.server");
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint")); // Adjusted path
const client_1 = require("@prisma/client"); // Import Prisma for error types
const registerSummaryHandlers = (socket) => {
    const { userID, routineID } = socket;
    if (!userID || !routineID) {
        console.error(`Socket Controller: userID (${userID}) or routineID (${routineID}) missing on socket object ${socket.id}.`);
        socket.emit('general:error', {
            success: false,
            message: 'Authentication details missing. Please reconnect.',
            error_code: 'AUTH_DETAILS_MISSING'
        });
        socket.disconnect(true);
        return;
    }
    const routineRoom = `routine-${routineID}`;
    // === SUMMARY:CREATE ===
    socket.on('summary:create', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Socket ${socket.id} (${userID}) creating summary in ${routineRoom} with data:`, data);
        try {
            if (!data.classID || !data.text || data.text.trim() === "") {
                socket.emit('summary:create:error', {
                    success: false,
                    message: 'Missing classID or text for summary.',
                    error_code: 'VALIDATION_ERROR',
                    details: { classID: !!data.classID, text: !!data.text && data.text.trim() !== "" }
                });
                return;
            }
            // Create the summary
            const newSummary = yield prisma_clint_1.default.summary.create({
                data: {
                    text: data.text, // Corrected from data.message
                    classId: data.classID,
                    ownerId: userID, // Corrected from authorId
                    imageLinks: data.imageLinks, // Corrected to use imageLinks
                    routineId: routineID,
                },
                include: {
                    // images: true, // Removed: Image model is not separate for summary
                    owner: { select: { id: true, name: true, image: true } } // Corrected to owner and image (from photo)
                }
            });
            // Update the routine's updatedAt timestamp
            yield prisma_clint_1.default.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });
            console.log(`Summary created by ${userID} in ${routineRoom}:`, newSummary.id);
            socket_server_1.io.to(routineRoom).emit('summary:created', newSummary);
            socket.emit('summary:create:success', { success: true, data: newSummary });
        }
        catch (error) {
            console.error(`Error creating summary for ${userID} in ${routineRoom}:`, error);
            let errorMessage = 'Failed to create summary. Please try again.';
            let errorCode = 'SERVER_ERROR';
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                // Handle known Prisma errors
                if (error.code === 'P2002') { // Unique constraint violation
                    errorMessage = 'A summary with similar details already exists.';
                    errorCode = 'UNIQUE_CONSTRAINT_FAILED';
                }
                // Add more Prisma error codes as needed
            }
            socket.emit('summary:create:error', {
                success: false,
                message: errorMessage,
                error_code: errorCode,
                details: error.message // Or specific fields from error.meta if available
            });
        }
    }));
    // === SUMMARY:UPDATE ===
    socket.on('summary:update', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Socket ${socket.id} (${userID}) updating summary ${data.summaryID} in ${routineRoom} with data:`, data);
        try {
            const { summaryID, text, imageLinks } = data;
            if (!summaryID) {
                socket.emit('summary:update:error', {
                    success: false,
                    message: 'Summary ID is required for update.',
                    error_code: 'VALIDATION_ERROR',
                    details: { summaryID: !!summaryID }
                });
                return;
            }
            if (text !== undefined && text.trim() === "") {
                socket.emit('summary:update:error', {
                    success: false,
                    message: 'Summary text cannot be empty.',
                    error_code: 'VALIDATION_ERROR',
                });
                return;
            }
            const existingSummary = yield prisma_clint_1.default.summary.findUnique({
                where: { id: summaryID },
            });
            if (!existingSummary) {
                socket.emit('summary:update:error', {
                    success: false,
                    message: 'Summary not found.',
                    error_code: 'NOT_FOUND'
                });
                return;
            }
            if (existingSummary.ownerId !== userID) {
                socket.emit('summary:update:error', {
                    success: false,
                    message: 'You are not authorized to update this summary.',
                    error_code: 'FORBIDDEN'
                });
                return;
            }
            // Prepare update data
            const updateData = {};
            if (text)
                updateData.text = text; // Corrected from message
            if (imageLinks)
                updateData.imageLinks = imageLinks; // Corrected to use imageLinks
            // No need to delete/create images separately if imageLinks is just a string array
            const updatedSummary = yield prisma_clint_1.default.summary.update({
                where: { id: summaryID },
                data: updateData,
                include: {
                    // images: true, // Removed
                    owner: { select: { id: true, name: true, image: true } } // Corrected to owner and image
                }
            });
            // Update the routine's updatedAt timestamp
            yield prisma_clint_1.default.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });
            console.log(`Summary ${summaryID} updated by ${userID} in ${routineRoom}`);
            socket_server_1.io.to(routineRoom).emit('summary:updated', updatedSummary);
            socket.emit('summary:update:success', { success: true, data: updatedSummary });
        }
        catch (error) {
            console.error(`Error updating summary ${data.summaryID} for ${userID} in ${routineRoom}:`, error);
            let errorMessage = 'Failed to update summary. Please try again.';
            let errorCode = 'SERVER_ERROR';
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') { // Record to update not found
                    errorMessage = 'Summary not found for update.';
                    errorCode = 'NOT_FOUND';
                }
            }
            socket.emit('summary:update:error', {
                success: false,
                message: errorMessage,
                error_code: errorCode,
                details: error.message
            });
        }
    }));
    // === SUMMARY:DELETE ===
    socket.on('summary:delete', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Socket ${socket.id} (${userID}) deleting summary ${data.summaryID} in ${routineRoom}`);
        try {
            const { summaryID } = data;
            if (!summaryID) {
                socket.emit('summary:delete:error', {
                    success: false,
                    message: 'Summary ID is required for deletion.',
                    error_code: 'VALIDATION_ERROR',
                    details: { summaryID: !!summaryID }
                });
                return;
            }
            const summaryToDelete = yield prisma_clint_1.default.summary.findUnique({
                where: { id: summaryID },
            });
            if (!summaryToDelete) {
                socket.emit('summary:delete:error', {
                    success: false,
                    message: 'Summary not found.',
                    error_code: 'NOT_FOUND'
                });
                return;
            }
            if (summaryToDelete.ownerId !== userID) {
                socket.emit('summary:delete:error', {
                    success: false,
                    message: 'You are not authorized to delete this summary.',
                    error_code: 'FORBIDDEN'
                });
                return;
            }
            // Note: Image deletion from Firebase/storage would need to be handled here
            // For now, we only delete from DB. Since imageLinks are part of Summary, they get deleted with it.
            // No need for prisma.image.deleteMany
            yield prisma_clint_1.default.summary.delete({ where: { id: summaryID } });
            // Update the routine's updatedAt timestamp
            yield prisma_clint_1.default.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });
            console.log(`Summary ${summaryID} deleted by ${userID} from ${routineRoom}`);
            socket_server_1.io.to(routineRoom).emit('summary:deleted', { summaryID, routineID });
            socket.emit('summary:delete:success', { success: true, summaryID });
        }
        catch (error) {
            console.error(`Error deleting summary ${data.summaryID} for ${userID} in ${routineRoom}:`, error);
            let errorMessage = 'Failed to delete summary. Please try again.';
            let errorCode = 'SERVER_ERROR';
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') { // Record to delete not found
                    errorMessage = 'Summary not found for deletion.';
                    errorCode = 'NOT_FOUND';
                }
            }
            socket.emit('summary:delete:error', {
                success: false,
                message: errorMessage,
                error_code: errorCode,
                details: error.message
            });
        }
    }));
    console.log(`Registered summary handlers for user ${userID} in routine ${routineID} on socket ${socket.id}`);
};
exports.registerSummaryHandlers = registerSummaryHandlers;
