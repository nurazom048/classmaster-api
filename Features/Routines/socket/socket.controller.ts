import { io } from '../../../socket.server';
import prisma from '../../../prisma/schema/prisma.clint';
import { Prisma } from '@prisma/client';
import { AuthenticatedSocket } from './socket.gateway';

interface SummaryCreateData {
    text: string;
    classID: string;
    imageLinks?: string[];
}

interface SummaryUpdateData {
    summaryID: string;
    text?: string;
    imageLinks?: string[];
}

interface SummaryDeleteData {
    summaryID: string;
}

export const registerSummaryHandlers = (socket: AuthenticatedSocket) => {
    const { userID } = socket;

    if (!userID) {
        console.error(`Socket Controller: userID missing on socket ${socket.id}`);
        socket.emit('general:error', {
            success: false,
            message: 'Authentication details missing. Please reconnect.',
            error_code: 'AUTH_DETAILS_MISSING'
        });
        socket.disconnect(true);
        return;
    }

    console.log(`Registered summary handlers for user ${userID} on socket ${socket.id}`);

    // === SUMMARY:CREATE ===
    socket.on('summary:create', async (data: any) => {
        console.log('Received summary:create with full payload:', JSON.stringify(data, null, 2));

        // Extract the actual payload from the nested structure
        const payload = data.payload;
        if (!payload) {
            console.error('Missing payload in data:', data);
            socket.emit('summary:create:error', {
                success: false,
                message: 'Invalid payload structure',
                error_code: 'INVALID_PAYLOAD_STRUCTURE'
            });
            return;
        }

        console.log(`Socket ${socket.id} (${userID}) creating summary for class ${payload?.classID}`);

        try {
            // Validation
            if (!payload?.classID) {
                console.error('Missing classID in payload:', payload);
                socket.emit('summary:create:error', {
                    success: false,
                    message: 'Missing classID for summary.',
                    error_code: 'MISSING_CLASS_ID'
                });
                return;
            }

            if (!payload?.text || payload.text.trim() === "") {
                socket.emit('summary:create:error', {
                    success: false,
                    message: 'Missing or empty text for summary.',
                    error_code: 'MISSING_TEXT'
                });
                return;
            }

            // Verify class exists
            const classObj = await prisma.class.findUnique({
                where: { id: payload.classID },
                select: { routineId: true }
            });

            if (!classObj) {
                console.error(`Class not found: ${payload.classID}`);
                socket.emit('summary:create:error', {
                    success: false,
                    message: 'Class not found.',
                    error_code: 'CLASS_NOT_FOUND'
                });
                return;
            }

            const classRoom = `class-${payload.classID}`;
            console.log(`Creating summary for class room: ${classRoom}`);

            // Create summary
            const newSummary = await prisma.summary.create({
                data: {
                    text: payload.text,
                    classId: payload.classID,
                    ownerId: userID,
                    imageLinks: payload.imageLinks || [],
                    routineId: classObj.routineId,
                },
                include: {
                    owner: { select: { id: true, name: true, image: true } }
                }
            });

            // Update routine
            await prisma.routine.update({
                where: { id: classObj.routineId },
                data: { updatedAt: new Date() },
            });

            // Join class room if not already joined
            if (!socket.rooms.has(classRoom)) {
                socket.join(classRoom);
                console.log(`User ${userID} joined class room ${classRoom}`);
            }

            // Broadcast events
            io.to(classRoom).emit('summary:created', newSummary);
            socket.emit('summary:create:success', {
                success: true,
                data: newSummary
            });

            console.log(`Summary created successfully for class ${payload.classID}`);

        } catch (error: any) {
            console.error(`Error creating summary:`, error);

            let errorMessage = 'Failed to create summary';
            let errorCode = 'SERVER_ERROR';

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                console.error('Prisma error:', error.code, error.meta);
                if (error.code === 'P2002') {
                    errorMessage = 'Summary already exists';
                    errorCode = 'DUPLICATE_SUMMARY';
                }
            }

            socket.emit('summary:create:error', {
                success: false,
                message: errorMessage,
                error_code: errorCode,
                details: error.message
            });
        }
    });

    // === SUMMARY:UPDATE ===
    socket.on('summary:update', async (data: SummaryUpdateData) => {
        try {
            if (!data.summaryID) {
                socket.emit('summary:update:error', {
                    success: false,
                    message: 'Summary ID is required.',
                    error_code: 'VALIDATION_ERROR'
                });
                return;
            }

            // Get existing summary with class info
            const existingSummary = await prisma.summary.findUnique({
                where: { id: data.summaryID },
                include: { class: { select: { id: true } } }
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
                    message: 'Unauthorized to update this summary.',
                    error_code: 'FORBIDDEN'
                });
                return;
            }

            const classRoom = `class-${existingSummary.class.id}`;

            // Prepare update
            const updateData: any = {};
            if (data.text) updateData.text = data.text;
            if (data.imageLinks) updateData.imageLinks = data.imageLinks;

            // Perform update
            const updatedSummary = await prisma.summary.update({
                where: { id: data.summaryID },
                data: updateData,
                include: {
                    owner: { select: { id: true, name: true, image: true } },
                    class: { select: { routineId: true } }
                }
            });

            // Update routine timestamp
            await prisma.routine.update({
                where: { id: updatedSummary.class.routineId },
                data: { updatedAt: new Date() },
            });

            // Broadcast updates
            io.to(classRoom).emit('summary:updated', updatedSummary);
            socket.emit('summary:update:success', {
                success: true,
                data: updatedSummary
            });

        } catch (error: any) {
            console.error(`Error updating summary:`, error);

            socket.emit('summary:update:error', {
                success: false,
                message: 'Failed to update summary. Please try again.',
                error_code: 'SERVER_ERROR'
            });
        }
    });

    // === SUMMARY:DELETE ===
    socket.on('summary:delete', async (data: SummaryDeleteData) => {
        try {
            if (!data.summaryID) {
                socket.emit('summary:delete:error', {
                    success: false,
                    message: 'Summary ID is required.',
                    error_code: 'VALIDATION_ERROR'
                });
                return;
            }

            // Get summary with class info
            const summary = await prisma.summary.findUnique({
                where: { id: data.summaryID },
                include: { class: { select: { id: true, routineId: true } } }
            });

            if (!summary) {
                socket.emit('summary:delete:error', {
                    success: false,
                    message: 'Summary not found.',
                    error_code: 'NOT_FOUND'
                });
                return;
            }

            if (summary.ownerId !== userID) {
                socket.emit('summary:delete:error', {
                    success: false,
                    message: 'Unauthorized to delete this summary.',
                    error_code: 'FORBIDDEN'
                });
                return;
            }

            const classRoom = `class-${summary.class.id}`;

            // Delete summary
            await prisma.summary.delete({
                where: { id: data.summaryID }
            });

            // Update routine timestamp
            await prisma.routine.update({
                where: { id: summary.class.routineId },
                data: { updatedAt: new Date() },
            });

            // Broadcast deletion
            io.to(classRoom).emit('summary:deleted', {
                summaryID: data.summaryID,
                classID: summary.class.id
            });

            socket.emit('summary:delete:success', {
                success: true,
                summaryID: data.summaryID
            });

        } catch (error: any) {
            console.error(`Error deleting summary:`, error);

            socket.emit('summary:delete:error', {
                success: false,
                message: 'Failed to delete summary. Please try again.',
                error_code: 'SERVER_ERROR'
            });
        }
    });

    console.log(`Registered summary handlers for user ${userID} on socket ${socket.id}`);
};