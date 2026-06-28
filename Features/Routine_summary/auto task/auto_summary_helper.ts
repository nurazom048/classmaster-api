import prisma from '../../../prisma/client';

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
                fileLinks: [],
                externalLinks: [],
                autoDeleteAt: autoDeleteDate, 
            }
        });

        console.log(`🟢 Auto Summary created for Class: ${classId}`);
    } catch (error) {
        console.error("❌ Failed to create auto summary:", error);
        // We don't throw the error so it doesn't crash the main update flow
    }
};