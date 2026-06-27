import { Request, Response } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';

//! firebase
import { initializeApp } from 'firebase/app';
import { getStorage, ref, deleteObject } from 'firebase/storage';
const firebase_storage = require("../../../config/firebase/firebase_storage");
initializeApp(firebase_storage.firebaseConfig); // Initialize Firebase
const storage = getStorage();

// routine firebase (Ensure this path is correct for your project)
import { deleteRoutineMediaFolder } from '../firebase/routines.firebase';

// ==========================================
// 🌐 GLOBAL ROUTINE ACTIONS
// ==========================================

/**
 * GET /
 * Handles Global Feed, Search, Saved Routines, and User-specific Routines.
 * Query Params: ?search=... | ?type=saved | ?username=...
 */
export const listRoutines = async (req: any, res: Response) => {
  const { search, type, username, page = 1, limit = 10 } = req.query;
  const userId = req.user?.id || (req.isGuest ? null : undefined);

  try {
    let whereClause: any = {};

    if (search) {
      whereClause.routineName = { contains: String(search), mode: 'insensitive' };
    }

    if (type === 'saved' && userId) {
      whereClause.savedBy = { some: { id: userId } };
    }

    if (username) {
      whereClause.routineOwner = { username: String(username) };
    }

    // If no specific query is provided and user is logged in, show their routines (joined/created)
    if (!search && !type && !username && userId) {
      const joinedRoutineIds = await prisma.routineMember.findMany({
        where: { accountId: userId },
        select: { routineId: true },
      });
      const routineIdList = joinedRoutineIds.map(({ routineId }) => routineId);
      whereClause.id = { in: routineIdList };
    }

    const routines = await prisma.routine.findMany({
      where: whereClause,
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
      include: {
        routineOwner: {
          select: { id: true, name: true, username: true, image: true }
        },
        _count: {
          select: { routineMembers: true, savedBy: true, classes: true }
        }
      }
    });

    const totalCount = await prisma.routine.count({ where: whereClause });

    const formattedRoutines = routines.map(routine => ({
      id: routine.id,
      routineName: routine.routineName,
      ownerAccountId: routine.ownerAccountId, // Explicitly pass the ID
      routineOwner: routine.routineOwner,     // Match the Dart model key
      isOwner: userId === routine.ownerAccountId, // Populated owner status indicator
      createdAt: routine.createdAt,
      stats: {
        totalMembers: routine._count.routineMembers,
        totalSaved: routine._count.savedBy,
        totalClasses: routine._count.classes,
      }
    }));

    res.status(200).json({
      message: "Routines fetched successfully",
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / Number(limit)),
      totalCount,
      routines: formattedRoutines
    });

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching routines", error: error.message });
  }
};

export const createRoutine = async (req: any, res: Response) => {
  const { name } = req.body;
  const ownerId = req.user?.id;

  if (!name || !ownerId) return res.status(400).json({ message: "Routine name and ownerId are required" });

  try {
    const result = await prisma.$transaction(async (tx) => {
      const existingRoutine = await tx.routine.findFirst({
        where: { routineName: name, routineOwner: { id: ownerId } },
      });

      if (existingRoutine) throw new Error("Routine already created with this name");

      const createdRoutine = await tx.routine.create({
        data: { routineName: name, routineOwner: { connect: { id: ownerId } } },
      });

      const routineMember = await tx.routineMember.create({
        data: { routineId: createdRoutine.id, accountId: ownerId, owner: true },
      });

      const updatedUser = await tx.account.update({
        where: { id: ownerId },
        data: { createdRoutines: { connect: { id: createdRoutine.id } } },
      });

      return { createdRoutine, routineMember, updatedUser };
    });

    res.status(201).json({
      message: "Routine created successfully",
      routine: result.createdRoutine,
      user: result.updatedUser,
      routineMember: result.routineMember,
    });
  } catch (error: any) {
    console.error("Error creating routine:", error);
    res.status(500).json({ message: `Routine creation failed: ${error.message || "Unknown error"}` });
  }
};

// ==========================================
// 🎯 SPECIFIC ROUTINE ACTIONS
// ==========================================

export const current_user_status = async (req: any, res: Response) => {
  try {
    // 🐛 Fix: Safely check for both casing styles to prevent undefined Prisma queries
    const routineId = req.params.routineId || req.params.routineID;

    if (!routineId) return res.status(400).json({ message: 'Routine ID is required in URL parameters' });

    if (req.isGuest) {
      const routine = await prisma.routine.findUnique({
        where: { id: routineId },
        include: { routineMembers: true }
      });
      return res.status(200).json({
        isOwner: false, isCaptain: false, activeStatus: 'not_joined',
        isSaved: false, memberCount: routine ? routine.routineMembers.length : 0, notificationOn: false,
      });
    }

    const { id } = req.user;
    const routine = await prisma.routine.findUnique({
      where: { id: routineId },
      include: { routineMembers: true, RoutinesJoinRequest: true },
    });

    if (!routine) return res.status(404).json({ message: 'Routine not found' });

    let activeStatus = 'not_joined';
    let isSaved = false;

    const savedRoutine = await prisma.account.findUnique({
      where: { id },
      select: { savedRoutines: { where: { id: routineId } } },
    });

    if ((savedRoutine?.savedRoutines?.length ?? 0) > 0) isSaved = true;

    const routineMember = await prisma.routineMember.findFirst({
      where: { routineId, accountId: id },
    });

    if (routineMember) activeStatus = 'joined';

    const pendingRequest = await prisma.routinesJoinRequest.findFirst({
      where: { routineId, accountIdBy: id },
    });

    if (pendingRequest) activeStatus = 'request_pending';

    res.status(200).json({
      isOwner: routineMember?.owner || false,
      isCaptain: routineMember?.captain || false,
      activeStatus,
      isSaved,
      memberCount: routine.routineMembers.length,
      notificationOn: routineMember?.notificationOn || false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing the request.' });
  }
};

export const deleteRoutineById = async (req: any, res: Response) => {
  const routineID = req.params.routineID || req.params.routineId;
  const ownerId = req.user?.id;

  if (!routineID || !ownerId) return res.status(400).json({ message: "Routine ID and ownerId are required" });

  try {
    const result = await prisma.$transaction(async (tx) => {
      const existingRoutine = await tx.routine.findFirst({
        where: { id: routineID, routineOwner: { id: ownerId } },
      });

      if (!existingRoutine) throw new Error("Routine not found or you are not the owner");

      await tx.routineMember.deleteMany({ where: { routineId: existingRoutine.id } });
      const deletedRoutine = await tx.routine.delete({ where: { id: existingRoutine.id } });

      return deletedRoutine;
    });

    try { await deleteRoutineMediaFolder(routineID); } catch (e) { console.error("Firebase deletion failed", e); }

    res.status(200).json({ message: "Routine deleted successfully", routine: result });
  } catch (error: any) {
    console.error("Error deleting routine:", error);
    res.status(500).json({ message: `Routine deletion failed: ${error.message || "Unknown error"}` });
  }
};

export const save_and_unsave_routine = async (req: any, res: Response) => {
  const routineId = req.params.routineId || req.params.routineID;
  const { saveCondition } = req.body;
  const { id: userId } = req.user;

  if (!routineId) return res.status(400).json({ message: "Routine ID is required" });
  if (!["true", "false"].includes(saveCondition)) return res.status(400).json({ message: "Invalid saveCondition. Must be 'true' or 'false'." });

  try {
    const [routine, isSaved] = await Promise.all([
      prisma.routine.findUnique({ where: { id: routineId } }),
      prisma.account.findFirst({ where: { id: userId, savedRoutines: { some: { id: routineId } } } })
    ]);

    if (!routine) return res.status(404).json({ message: "Routine not found" });
    if (saveCondition === "true" && isSaved) return res.status(200).json({ message: "Routine is already saved", save: true });
    if (saveCondition === "false" && !isSaved) return res.status(400).json({ message: "Routine is not currently saved" });

    await prisma.account.update({
      where: { id: userId },
      data: {
        savedRoutines: saveCondition === "true" ? { connect: { id: routineId } } : { disconnect: { id: routineId } }
      },
    });

    res.status(200).json({
      message: saveCondition === "true" ? "Routine saved successfully" : "Routine unsaved successfully",
      save: saveCondition === "true"
    });
  } catch (error) {
    console.error("Error handling save/unsave routine:", error);
    res.status(500).json({ message: "An error occurred while processing the request." });
  }
};

// ==========================================
// 🏫 CLASSES & WEEKDAYS
// ==========================================

export const allClass = async (req: any, res: Response) => {
  const routineID = req.params.routineID || req.params.routineId;

  if (!routineID) return res.status(400).json({ message: "Routine ID is required" });

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: routineID },
      include: { routineOwner: { select: { id: true, name: true, username: true, image: true } } },
    });
    if (!routine) return res.status(404).json({ message: 'Routine not found' });

    const classes = await prisma.class.findMany({
      where: { routineId: routineID },
      select: { id: true, name: true, instructorName: true, subjectCode: true, routineId: true },
    });

    const weekdayClasses: { [key: string]: any[] } = { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] };

    const classesWithWeekdays = await prisma.class.findMany({
      where: { routineId: routineID },
      include: { weekdays: true },
    });

    classesWithWeekdays.forEach((classItem) => {
      classItem.weekdays.forEach((weekday) => {
        const dayKey = weekday.Day.toLowerCase();
        if (weekdayClasses[dayKey]) {
          weekdayClasses[dayKey].push({
            ...classItem,
            room: weekday.room,
            startTime: weekday.startTime,
            endTime: weekday.endTime,
          });
        }
      });
    });

    res.status(200).json({ allClass: classes, weekdayClasses, owner: routine.routineOwner });
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const create_class = async (req: any, res: Response) => {
  const { name, subjectCode, instructorName, startTime, endTime, room, weekday } = req.body;
  const routineId = req.params.routineId || req.params.routineID;

  if (!routineId) return res.status(400).json({ message: "Routine ID is required" });

  try {
    const result = await prisma.$transaction(async (tx) => {
      const createdClass = await tx.class.create({
        data: { name, subjectCode, instructorName, routineId },
      });

      const createdWeekday = await tx.weekday.create({
        data: {
          class: { connect: { id: createdClass.id } },
          routine: { connect: { id: routineId } },
          Day: weekday,
          room,
          startTime,
          endTime,
        },
      });

      return { createdClass, createdWeekday };
    });
    console.log({ message: "Class and weekday created successfully:", result });
    res.status(201).json({ message: "Class and weekday created successfully", result });
  } catch (error: any) {
    console.error({ message: "Error creating class and weekday", error });
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const findClass = async (req: any, res: Response) => {
  const { classID } = req.params;

  try {
    const classes = await prisma.class.findFirst({ where: { id: classID } });
    if (!classes) return res.status(404).send({ message: 'Class not found' });

    const weekdays = await prisma.weekday.findMany({ where: { classId: classID } });
    res.status(200).send({ message: "Class details fetched", classes, weekdays });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ message: 'Error fetching class', weekdays: [] });
  }
};

export const editClass = async (req: any, res: Response) => {
  const { classID } = req.params;
  const { name, instructorName, subjectCode } = req.body;

  try {
    const updatedClass = await prisma.class.update({
      where: { id: classID },
      data: { name, instructorName, subjectCode },
    });

    res.status(200).json({ class: updatedClass, message: 'Class updated successfully' });
  } catch (error: any) {
    console.error('Error updating class:', error);
    res.status(500).send({ message: error.message });
  }
};

/**
 * 🦸‍♂️ SUPER UPDATE CLASS
 * Allows updating class details, adding weekdays, and removing weekdays in ONE transaction
 */
export const superUpdateClass = async (req: any, res: Response) => {
  const { classID } = req.params;
  // payload expects: { name, instructorName, subjectCode, addWeekdays: [{day, room, startTime, endTime}], removeWeekdayIds: ["id1", "id2"] }
  const { name, instructorName, subjectCode, addWeekdays = [], removeWeekdayIds = [] } = req.body;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Find existing class to verify it exists and to get the routineId
      const existingClass = await tx.class.findUnique({
        where: { id: classID },
      });

      if (!existingClass) throw new Error("Class not found");

      // 2. Update Class Details
      const updatedClass = await tx.class.update({
        where: { id: classID },
        data: {
          ...(name && { name }),
          ...(instructorName && { instructorName }),
          ...(subjectCode && { subjectCode }),
        },
      });

      // 3. Remove Weekdays
      if (removeWeekdayIds.length > 0) {
        // Ensure we don't delete all weekdays unless intended (optional safety check)
        const currentWeekdayCount = await tx.weekday.count({ where: { classId: classID } });
        if (currentWeekdayCount <= removeWeekdayIds.length && addWeekdays.length === 0) {
          throw new Error("Class must have at least one weekday. Add new weekdays before removing the remaining ones.");
        }

        await tx.weekday.deleteMany({
          where: {
            id: { in: removeWeekdayIds },
            classId: classID // Safety check to ensure they belong to this class
          }
        });
      }

      // 4. Add New Weekdays
      const newlyAddedWeekdays = [];
      if (addWeekdays.length > 0) {
        for (const wd of addWeekdays) {
          const newWd = await tx.weekday.create({
            data: {
              classId: classID,
              routineId: existingClass.routineId,
              Day: wd.day.toLowerCase(),
              room: wd.room,
              startTime: new Date(wd.startTime),
              endTime: new Date(wd.endTime),
            }
          });
          newlyAddedWeekdays.push(newWd);
        }
      }

      // Fetch the final list of weekdays for this class to return to frontend
      const finalWeekdays = await tx.weekday.findMany({ where: { classId: classID } });

      return { class: updatedClass, weekdays: finalWeekdays };
    });

    res.status(200).json({
      message: "Class super updated successfully",
      data: result
    });

  } catch (error: any) {
    console.error("Super update failed:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const remove_class = async (req: any, res: Response) => {
  const { classID } = req.params;

  try {
    const session = await prisma.$transaction(async (tx) => {
      const findClass = await tx.class.findUnique({ where: { id: classID } });
      if (!findClass) throw new Error('Class not found');

      const summaries = await tx.summary.findMany({ where: { classId: classID } });

      for (const summary of summaries) {
        for (const imageLink of summary.imageLinks ?? []) {
          try {
            const fileRef = ref(storage, imageLink);
            await deleteObject(fileRef);
          } catch (e) { console.error("Could not delete file", e); }
        }
        await tx.summary.delete({ where: { id: summary.id } });
      }

      await tx.weekday.deleteMany({ where: { classId: classID } });
      await tx.class.delete({ where: { id: classID } });

      return { message: 'Class deleted successfully' };
    });

    res.send({ message: session.message });
  } catch (error: any) {
    console.error('Error in remove_class:', error);
    res.status(500).send({ message: error.message });
  }
};

export const classNotification = async (req: any, res: Response) => {
  const { id } = req.user;

  try {
    const routineMembers = await prisma.routineMember.findMany({
      where: { accountId: id },
      select: { routineId: true },
    });

    if (routineMembers.length === 0) return res.status(404).json({ message: 'No routines found for the user' });

    const routineIds = routineMembers.map((member) => member.routineId);

    const weekdaysWithClasses = await prisma.weekday.findMany({
      where: { routineId: { in: routineIds } },
      include: { class: { select: { id: true, name: true, instructorName: true, subjectCode: true } } },
    });

    const validWeekdays = weekdaysWithClasses.filter((weekday) => weekday.class !== null);

    res.status(200).json({ allClassForNotification: validWeekdays });
  } catch (error) {
    console.error('Error fetching class notifications:', error);
    res.status(500).json({ message: 'Server Error', notificationOnClasses: [] });
  }
};

export const allWeekdayInClass = async (req: any, res: Response) => {
  const { classID } = req.params;

  try {
    if (!classID) return res.status(400).send({ message: "classID not found", weekdays: [] });
    const weekdays = await prisma.weekday.findMany({ where: { classId: classID } });
    res.send({ message: "All weekdays in the class", weekdays });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ message: error.toString(), weekdays: [] });
  }
};

export const addWeekday = async (req: Request, res: Response) => {
  const classID = req.params.classID as string;
  const { day, room, startTime, endTime } = req.body;

  try {
    const transaction = await prisma.$transaction(async (tx) => {
      const classFind = await tx.class.findUnique({ where: { id: classID } });
      if (!classFind) throw new Error('Class not found');

      const newWeekday = await tx.weekday.create({
        data: {
          classId: classID,
          routineId: classFind.routineId,
          Day: day.toLowerCase(),
          room: room,
          startTime: new Date(startTime),
          endTime: new Date(endTime),
        },
      });

      return newWeekday;
    });

    res.send({ message: 'Weekday added successfully', newWeekday: transaction });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const deleteWeekdayById = async (req: Request, res: Response) => {
  const weekdayID = req.params.weekdayID as string;

  try {
    const result = await prisma.$transaction(async (tx) => {
      const weekday = await tx.weekday.findUnique({
        where: { id: weekdayID },
        select: { id: true, classId: true },
      });

      if (!weekday) throw new Error('Weekday not found');

      const weekdayCount = await tx.weekday.count({ where: { classId: weekday.classId } });
      if (weekdayCount <= 1) throw new Error('Class must have at least one weekday. Deletion not allowed.');

      const deletedWeekday = await tx.weekday.delete({ where: { id: weekdayID } });
      const remainingWeekdays = await tx.weekday.findMany({ where: { classId: weekday.classId } });

      return { deletedWeekday, remainingWeekdays };
    });

    res.status(200).json({
      message: 'Weekday deleted successfully',
      deletedWeekday: result.deletedWeekday,
      weekdays: result.remainingWeekdays,
    });
  } catch (error: any) {
    console.error('Error deleting weekday:', error);
    res.status(500).json({ message: error.message || 'Internal server error', weekdays: [] });
  }
};