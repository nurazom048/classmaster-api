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
exports.classNotification = exports.findClass = exports.allClass = exports.remove_class = exports.editClass = exports.allWeekdayInClass = exports.deleteWeekdayById = exports.addWeekday = exports.create_class = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
//! firebase 
const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } = require('firebase/storage');
const firebase_storage = require("../../../config/firebase/firebase_storage");
initializeApp(firebase_storage.firebaseConfig); // Initialize Firebase
// Get a reference to the Firebase storage bucket
const storage = getStorage();
//*******************************************************************************/
//---------------------------------  create class   ------------------------------/
//*******************************************************************************/
const create_class = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, subjectCode, instructorName, startTime, endTime, room, weekday } = req.body;
    const { routineId } = req.params;
    try {
        const result = yield prisma_clint_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            // Create the class
            const createdClass = yield prisma.class.create({
                data: {
                    name,
                    subjectCode,
                    instructorName,
                    routineId,
                },
            });
            // Create associated weekday
            const createdWeekday = yield prisma.weekday.create({
                data: {
                    class: {
                        connect: { id: createdClass.id }, // Connect to the created class
                    },
                    routine: {
                        connect: { id: routineId }, // Connect to the routine
                    },
                    Day: weekday, // Enum or string for the day
                    room,
                    startTime,
                    endTime,
                },
            });
            return { createdClass, createdWeekday };
        }));
        // Respond with the created class and weekday
        return res.status(201).json({
            message: "Class and weekday created successfully",
            class: result.createdClass,
            weekday: result.createdWeekday,
        });
    }
    catch (error) {
        console.error({ message: "Error creating class and weekday", error });
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
});
exports.create_class = create_class;
//*******************************************************************************/
//----------------------------Add weekday to class ------------------------------/
//*******************************************************************************/
const addWeekday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classID } = req.params;
    const { day, room, startTime, endTime } = req.body;
    try {
        // Start the transaction
        const transaction = yield prisma_clint_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Find the class and related routine
            const classFind = yield tx.class.findUnique({
                where: { id: classID },
                include: {
                    routine: true, // Ensure that the related routine is fetched
                },
            });
            if (!classFind)
                throw new Error('Class not found'); // Throw an error to roll back the transaction
            const routineId = classFind.routineId; // Get routineId from the class
            // Create the new weekday record using Prisma
            const newWeekday = yield tx.weekday.create({
                data: {
                    classId: classID,
                    routineId: routineId, // Relate to the found routine
                    Day: day.toLowerCase(), // Assuming `day` is passed as a string (e.g., "mon", "tue")
                    room: room,
                    startTime: new Date(startTime), // Assuming startTime and endTime are ISO strings
                    endTime: new Date(endTime),
                },
            });
            // Add the new weekday to the routine's weekdays array (relational integrity handled automatically by Prisma)
            yield tx.routine.update({
                where: { id: routineId },
                data: {
                    weekdays: {
                        connect: {
                            id: newWeekday.id, // Connect the new weekday to the routine
                        },
                    },
                },
            });
            // Return the new weekday if everything is successful
            return newWeekday;
        }));
        // Send the success response
        res.send({ message: 'Weekday added successfully', newWeekday: transaction });
    }
    catch (error) {
        // Handle any errors that occur
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});
exports.addWeekday = addWeekday;
//*******************************************************************************/
//---------------------------- deleteWeekdayById --------------------------------/
//*******************************************************************************/
const deleteWeekdayById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { weekdayID } = req.params;
    try {
        // Start a transaction to ensure data consistency
        const result = yield prisma_clint_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Fetch the weekday and associated class
            const weekday = yield tx.weekday.findUnique({
                where: { id: weekdayID },
                select: { id: true, classId: true },
            });
            if (!weekday) {
                throw new Error('Weekday not found');
            }
            // Ensure the class has at least one remaining weekday
            const weekdayCount = yield tx.weekday.count({
                where: { classId: weekday.classId },
            });
            if (weekdayCount <= 1) {
                throw new Error('Class must have at least one weekday. Deletion not allowed.');
            }
            // Delete the weekday
            const deletedWeekday = yield tx.weekday.delete({
                where: { id: weekdayID },
            });
            // Fetch remaining weekdays in the class
            const remainingWeekdays = yield tx.weekday.findMany({
                where: { classId: weekday.classId },
            });
            return { deletedWeekday, remainingWeekdays };
        }));
        // Return success response
        res.status(200).json({
            message: 'Weekday deleted successfully',
            deletedWeekday: result.deletedWeekday,
            weekdays: result.remainingWeekdays,
        });
    }
    catch (error) {
        console.error('Error deleting weekday:', error);
        res.status(500).json({ message: error.message || 'Internal server error', weekdays: [] });
    }
});
exports.deleteWeekdayById = deleteWeekdayById;
//******* show all weekday in a class ************** */
const allWeekdayInClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ClassID } = req.params;
    try {
        if (!ClassID)
            return res.status(500).send({ message: "ClassId not found", weekdays: [] });
        // 1 weekdays
        const weekdays = yield prisma_clint_1.default.weekday.findMany({ where: { classId: ClassID } });
        res.send({ message: "All weekday in the class", weekdays });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.toString, weekdays: [] });
    }
});
exports.allWeekdayInClass = allWeekdayInClass;
//*************************************************************************/
//-------------------------  edit_class   ---------------------------------/
//*************************************************************************/
const editClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classID } = req.params;
    const { name, instructorName, subjectCode } = req.body;
    try {
        //  Update the class details
        const updatedClass = yield prisma_clint_1.default.class.update({
            where: { id: classID },
            data: {
                name,
                instructorName,
                subjectCode,
            },
        });
        // Step 5: Return updated class data
        return res.status(200).json({
            class: updatedClass,
            message: 'Class updated successfully',
        });
    }
    catch (error) {
        console.error('Error updating class:', error);
        res.status(500).send({ message: error.message });
    }
});
exports.editClass = editClass;
//**********************************************************************/
//-------------------- Delete Class ------------------------------------//
//**********************************************************************/
const remove_class = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classID } = req.params;
    const { id } = req.user;
    console.log('Request to delete class');
    const session = yield prisma_clint_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            // Step 1: Find the class
            const findClass = yield tx.class.findUnique({
                where: { id: classID },
            });
            if (!findClass)
                throw new Error('Class not found');
            // Step 2: Check permission (find the routine)
            const routine = yield tx.routine.findUnique({
                where: { id: findClass.routineId },
            });
            if (!routine)
                throw new Error('Routine not found');
            // Step 3: Delete associated summaries
            const summaries = yield tx.summary.findMany({
                where: { classId: classID },
            });
            // Delete summaries and their files from Firebase storage
            for (const summary of summaries) {
                for (const imageLink of (_a = summary.imageLinks) !== null && _a !== void 0 ? _a : []) {
                    const fileRef = ref(storage, imageLink);
                    yield deleteObject(fileRef);
                }
                yield tx.summary.delete({
                    where: { id: summary.id },
                });
            }
            // Step 4: Delete associated weekdays
            yield tx.weekday.deleteMany({
                where: { classId: classID },
            });
            // Step 5: Delete the class
            yield tx.class.delete({
                where: { id: classID },
            });
            return { message: 'Class deleted successfully' };
        }
        catch (error) {
            throw error; // Re-throw error to be caught by the outer try-catch
        }
    }));
    try {
        // Commit transaction and respond
        res.send({ message: session.message });
    }
    catch (error) {
        console.error('Error in remove_class:', error);
        res.status(500).send({ message: error.message });
    }
});
exports.remove_class = remove_class;
//*********************************************************************************************/
//---------------------------- Full Routine or All Class --------------------------------------/
//*********************************************************************************************/
const allClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    console.log(routineID);
    try {
        // Check if the routine exists
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
            include: {
                routineOwner: {
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        image: true, // Include image if required
                    },
                },
            },
        });
        if (!routine) {
            return res.status(404).json({ message: 'Routine not found' });
        }
        // Fetch all classes related to the routine without including weekdays or timestamps
        const classes = yield prisma_clint_1.default.class.findMany({
            where: { routineId: routineID },
            select: {
                id: true,
                name: true,
                instructorName: true,
                subjectCode: true,
                routineId: true,
            }, // Exclude createdAt and updatedAt
        });
        // Initialize weekdays structure for grouping
        const weekdayClasses = { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] };
        // Group classes by weekdays
        const classesWithWeekdays = yield prisma_clint_1.default.class.findMany({
            where: { routineId: routineID },
            include: {
                weekdays: true, // Include weekdays for grouping
            },
        });
        classesWithWeekdays.forEach((classItem) => {
            classItem.weekdays.forEach((weekday) => {
                const dayKey = weekday.Day.toLowerCase(); // Get the day directly
                if (weekdayClasses[dayKey]) {
                    // Use the class and weekday properties directly
                    weekdayClasses[dayKey].push(Object.assign(Object.assign({}, classItem), { room: weekday.room, startTime: weekday.startTime, endTime: weekday.endTime }));
                }
                else {
                    console.warn(`Invalid weekday: ${weekday.Day} for class: ${classItem.id}`);
                }
            });
        });
        const { id, name, username, image } = routine.routineOwner;
        // Prepare the final response
        const response = {
            allClass: classes,
            weekdayClasses,
            owner: { id, name, username, image },
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.error('Error fetching classes:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.allClass = allClass;
//************   findClass       *************** */
const findClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classID } = req.params;
    console.log(classID + 'find class');
    try {
        // step:1 find classes
        const classes = yield prisma_clint_1.default.class.findFirst({ where: { id: classID } });
        if (!classes)
            return res.status(404).send({ message: 'Class not found' });
        // step:2 find weekday
        const weekdays = yield prisma_clint_1.default.class.findFirst({ where: { id: classID } });
        console.log({ message: "All weekday in the class", classes, weekdays });
        // step:3 send response
        res.status(200).send({ message: "All weekday in the class", classes, weekdays });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error updating class', weekdays: [] });
    }
});
exports.findClass = findClass;
//*********************************************************************** */
//------------------------- class Notification Time -----------------------//
//*********************************************************************** */
const classNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    try {
        // Step 1: Get all routine IDs where the user is a member
        const routineMembers = yield prisma_clint_1.default.routineMember.findMany({
            where: { accountId: id },
            select: { routineId: true },
        });
        if (routineMembers.length === 0) {
            return res.status(404).json({ message: 'No routines found for the user' });
        }
        // Extract routine IDs from the results
        const routineIds = routineMembers.map((member) => member.routineId);
        // Step 2: Find weekdays associated with the routine IDs
        const weekdaysWithClasses = yield prisma_clint_1.default.weekday.findMany({
            where: { routineId: { in: routineIds } },
            include: {
                class: {
                    select: {
                        id: true,
                        name: true,
                        instructorName: true,
                        subjectCode: true,
                    },
                },
            },
        });
        // Filter out weekdays without valid classes
        const validWeekdays = weekdaysWithClasses.filter((weekday) => weekday.class !== null);
        // Step 3: Send response with the filtered weekdays and class information
        res.status(200).json({ allClassForNotification: validWeekdays });
    }
    catch (error) {
        console.error('Error fetching class notifications:', error);
        res.status(500).json({ message: 'Server Error', notificationOnClasses: [] });
    }
});
exports.classNotification = classNotification;
