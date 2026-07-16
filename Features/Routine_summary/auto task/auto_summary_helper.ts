import prisma from '../../../prisma/schema/prisma.clint';
import { SummaryType } from '@prisma/client';

/**
 * 🤖 Auto Summary Generator
 * Call this function inside your class update/edit controller
 */
export const createAutoSummary = async (
    routineId: string,
    classId: string,
    ownerId: string,
    ownerName: string,
    changesMade: string // Example: "changed classname to Bangla Grammar, room 100 to 200"
) => {
    try {
        const autoDeleteDate = new Date();
        autoDeleteDate.setDate(autoDeleteDate.getDate() + 120);

        // Generate the auto text
        const text = `🔄 System Update: ${ownerName} just ${changesMade}.`;

        await prisma.summary.create({
            data: {
                routineId,
                classId,
                ownerId,
                text,
                imageLinks: [],
                autoDeleteAt: autoDeleteDate, 
                type: SummaryType.SYSTEM,
            }
        });

        console.log(`🟢 Auto Summary created for Class: ${classId}`);
    } catch (error) {
        console.error("❌ Failed to create auto summary:", error);
        // We don't throw the error so it doesn't crash the main update flow
    }
};

/**
 * 🤖 Reusable helper function to insert a system message for routine changes.
 * @param routineId ID of the routine
 * @param classId ID of the class
 * @param captainName Name of the captain/updater
 * @param actionDetails Description of the change (e.g. "changed class name Bangla to Bangla Grammar")
 */
export const createSystemMessage = async (
    routineId: string,
    classId: string,
    captainName: string,
    actionDetails: string
) => {
    try {
        const autoDeleteDate = new Date();
        autoDeleteDate.setDate(autoDeleteDate.getDate() + 120);

        // System messages format: "[Captain Name] changed class name Bangla to Bangla Grammar"
        const text = `${captainName} ${actionDetails}`;

        const routine = await prisma.routine.findUnique({
            where: { id: routineId },
            select: { ownerAccountId: true }
        });

        if (!routine) {
            console.error(`Routine ${routineId} not found for system message.`);
            return;
        }

        await prisma.summary.create({
            data: {
                routineId,
                classId,
                ownerId: routine.ownerAccountId,
                text,
                imageLinks: [],
                autoDeleteAt: autoDeleteDate,
                type: SummaryType.SYSTEM,
            }
        });

        console.log(`🟢 System Message created for Class: ${classId}`);
    } catch (error) {
        console.error("❌ Failed to create system message:", error);
    }
};