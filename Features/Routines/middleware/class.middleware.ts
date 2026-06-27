import { Request, Response, NextFunction } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';

export const checkClassAndPermission = async (req: any, res: Response, next: NextFunction) => {
    const { classID } = req.params;
    const { id } = req.user;

    try {
        // Step 1: Check if class exists
        const classData = await prisma.class.findFirst({ where: { id: classID } });
        if (!classData) {
            return res.status(404).send({ message: 'Class not found' });
        }

        // Step 2: Check if routine exists
        const routine = await prisma.routine.findFirst({ where: { id: classData.routineId } });
        if (!routine) {
            return res.status(404).send({ message: 'Routine not found' });
        }

        // Step 3: Check permission: owner or captain
        const routineMember = await prisma.routineMember.findFirst({
            where: { routineId: routine.id, accountId: id },
        });
        if (!routineMember || (!routineMember.captain && routine.ownerAccountId.toString() !== id)) {
            return res.status(401).json({ message: 'Only captains and owners can update classes' });
        }

        // Attach the necessary data to request object for later use
        req.classData = classData;
        req.routine = routine;
        req.routineMember = routineMember;

        // Proceed to the next middleware or route handler
        next();

    } catch (error) {
        console.error('Error in checkClassAndPermission middleware:', error);
        res.status(500).send({ message: 'Server error' });
    }
};

export const checkDuplicateClass = async (req: Request, res: Response, next: NextFunction) => {
    const { name, subjectCode } = req.body;
    const rawRoutineId = req.params.routineId || req.params.routineID;
    const routineId = Array.isArray(rawRoutineId) ? rawRoutineId[0] : rawRoutineId;

    if (!routineId) {
        return res.status(400).json({ message: "Routine ID is required" });
    }

    try {
        // ডাটাবেসে চেক করো এই রুটিনের আন্ডারে একই নামের বা একই কোডের কোনো ক্লাস আছে কি না
        const existingClass = await prisma.class.findFirst({
            where: {
                routineId: routineId,
                OR: [
                    { name: name },
                    { subjectCode: subjectCode }
                ]
            }
        });

        // যদি ক্লাস পাওয়া যায়, তবে এক্সাক্টলি কোনটা মিলেছে সে অনুযায়ী মেসেজ দাও
        if (existingClass) {
            if (existingClass.name === name && existingClass.subjectCode === subjectCode) {
                return res.status(409).json({ message: `Class name '${name}' and subject code '${subjectCode}' already exist in this routine.` });
            } else if (existingClass.name === name) {
                return res.status(409).json({ message: `Class name '${name}' already exists in this routine.` });
            } else if (existingClass.subjectCode === subjectCode) {
                return res.status(409).json({ message: `Subject code '${subjectCode}' already exists in this routine.` });
            }
        }

        // যদি কোনো ডুপ্লিকেট না থাকে, তাহলে পরের ধাপে (create_class) যেতে দাও
        next();
    } catch (error: any) {
        console.error("Error checking duplicate class:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};