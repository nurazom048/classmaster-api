import { io } from '../../../socket.server';
import prisma from '../../../prisma/schema/prisma.clint'; // Adjusted path
import { Prisma } from '@prisma/client'; // Import Prisma for error types
import { AuthenticatedSocket } from './socket.gateway'; // Import the interface

interface SummaryCreateData {
    text: string; // Corrected from message
    classID: string;
    imageLinks?: string[]; // Corrected to match schema
}

interface SummaryUpdateData {
    summaryID: string;
    text?: string; // Corrected from message
    imageLinks?: string[]; // Corrected to match schema
}

interface SummaryDeleteData {
    summaryID: string;
}

export const registerSummaryHandlers = (socket: AuthenticatedSocket) => {
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
    socket.on('summary:create', async (data: SummaryCreateData) => {
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
            const newSummary = await prisma.summary.create({
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
            await prisma.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });

            console.log(`Summary created by ${userID} in ${routineRoom}:`, newSummary.id);
            io.to(routineRoom).emit('summary:created', newSummary);
            socket.emit('summary:create:success', { success: true, data: newSummary });

        } catch (error: any) {
            console.error(`Error creating summary for ${userID} in ${routineRoom}:`, error);
            let errorMessage = 'Failed to create summary. Please try again.';
            let errorCode = 'SERVER_ERROR';
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
    });

    // === SUMMARY:UPDATE ===
    socket.on('summary:update', async (data: SummaryUpdateData) => {
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


            const existingSummary = await prisma.summary.findUnique({
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
            const updateData: any = {};
            if (text) updateData.text = text; // Corrected from message
            if (imageLinks) updateData.imageLinks = imageLinks; // Corrected to use imageLinks

            // No need to delete/create images separately if imageLinks is just a string array

            const updatedSummary = await prisma.summary.update({
                where: { id: summaryID },
                data: updateData,
                include: {
                    // images: true, // Removed
                    owner: { select: { id: true, name: true, image: true } } // Corrected to owner and image
                }
            });

            // Update the routine's updatedAt timestamp
            await prisma.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });

            console.log(`Summary ${summaryID} updated by ${userID} in ${routineRoom}`);
            io.to(routineRoom).emit('summary:updated', updatedSummary);
            socket.emit('summary:update:success', { success: true, data: updatedSummary });

        } catch (error: any) {
            console.error(`Error updating summary ${data.summaryID} for ${userID} in ${routineRoom}:`, error);
            let errorMessage = 'Failed to update summary. Please try again.';
            let errorCode = 'SERVER_ERROR';
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
    });

    // === SUMMARY:DELETE ===
    socket.on('summary:delete', async (data: SummaryDeleteData) => {
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

            const summaryToDelete = await prisma.summary.findUnique({
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
            await prisma.summary.delete({ where: { id: summaryID } });

            // Update the routine's updatedAt timestamp
            await prisma.routine.update({
                where: { id: routineID },
                data: { updatedAt: new Date() },
            });

            console.log(`Summary ${summaryID} deleted by ${userID} from ${routineRoom}`);
            io.to(routineRoom).emit('summary:deleted', { summaryID, routineID });
            socket.emit('summary:delete:success', { success: true, summaryID });

        } catch (error: any) {
            console.error(`Error deleting summary ${data.summaryID} for ${userID} in ${routineRoom}:`, error);
            let errorMessage = 'Failed to delete summary. Please try again.';
            let errorCode = 'SERVER_ERROR';
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
    });

    console.log(`Registered summary handlers for user ${userID} in routine ${routineID} on socket ${socket.id}`);
};
