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
exports.weekdayValidation = exports.classEditValidation = exports.cakedPermission = exports.classValidation = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
const client_1 = require("@prisma/client");
const classValidation = (req, res, next) => {
    console.log(req.body);
    try {
        const { name, instructorName, subjectCode, room, weekday, startTime, endTime } = req.body; // Added `startTime` and `endTime`
        const { routineId } = req.params;
        // Validation for required fields
        if (!name) {
            return res.status(400).json({ message: "Validation failed: 'name' is required" });
        }
        if (!instructorName) {
            return res.status(400).json({ message: "Validation failed: 'instructorName' is required" });
        }
        if (!subjectCode) {
            return res.status(400).json({ message: "Validation failed: 'subjectCode' is required" });
        }
        if (!weekday || typeof weekday !== "string" || !Object.keys(client_1.Day).some((key) => key.toUpperCase() === weekday.toUpperCase())) {
            return res.status(400).json({
                message: `Validation failed: 'weekday' must be one of the following: ${Object.keys(client_1.Day).join(", ")}`,
            });
        }
        if (!room) {
            return res.status(400).json({ message: "Validation failed: 'room' is required" });
        }
        if (!startTime) {
            return res.status(400).json({ message: "Validation failed: 'startTime' is required" });
        }
        if (!endTime) {
            return res.status(400).json({ message: "Validation failed: 'endTime' is required" });
        }
        if (!routineId) {
            return res.status(400).json({ message: "Validation failed: 'routineId' is required" });
        }
        // Proceed to the next middleware/controller if all validations pass
        next();
    }
    catch (error) {
        // Handle unexpected errors during validation
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.classValidation = classValidation;
//@cakedPermission
const cakedPermission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { routineId } = req.params;
    const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!routineId) {
        return res.status(400).json({ message: "Validation failed: 'routineId' is required" });
    }
    if (!userID) {
        return res.status(400).json({ message: "Validation failed: 'userID' is required" });
    }
    try {
        // Find Routine to check ownership
        const findRoutine = yield prisma_clint_1.default.routine.findUnique({ where: { id: routineId } });
        if (!findRoutine) {
            return res.status(404).json({ message: "Routine not found" });
        }
        // Check permission: owner or captain
        const routineMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                routineId: routineId,
                accountId: userID,
            },
        });
        if (!routineMember || (!routineMember.owner && !routineMember.captain)) {
            return res.status(403).json({ message: "Only captains and owners can add classes" });
        }
        next();
    }
    catch (error) {
        console.error({ message: 'Error middleware adding classes', error });
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.cakedPermission = cakedPermission;
// class edit validation
const classEditValidation = (req, res, next) => {
    console.log(req.body);
    try {
        const { name, instructorName, subjectCode } = req.body;
        // Check if required fields are provided
        if (!name) {
            return res.status(400).send({ message: 'Validation failed: name is required' });
        }
        if (!instructorName) {
            return res.status(400).send({ message: 'Validation failed: instructorName is required' });
        }
        if (!subjectCode) {
            return res.status(400).send({ message: 'Validation failed: subjectcode is required' });
        }
        next();
    }
    catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};
exports.classEditValidation = classEditValidation;
//## Add Weekday Validation functions
const weekdayValidation = (req, res, next) => {
    try {
        const { startTime, endTime, room, day } = req.body;
        const { classID } = req.params;
        // Parse the start and end times
        const startTimeMills = new Date(startTime).getTime();
        const endTimeMills = new Date(endTime).getTime();
        // Validation for classID, room, and day
        if (!classID) {
            return res.status(400).send({ message: 'Validation failed: classId is required' });
        }
        if (!room) {
            return res.status(400).send({ message: 'Validation failed: room is required' });
        }
        if (!day || typeof day !== 'string' || !Object.values(client_1.Day).includes(day.toLowerCase())) {
            return res.status(400).json({
                message: `Validation failed: 'day' must be one of the following: ${Object.values(client_1.Day).join(", ")}`,
            });
        }
        // Validation for start and end time
        if (!startTimeMills) {
            return res.status(400).send({ message: 'Validation failed: Start time is required' });
        }
        if (!endTimeMills) {
            return res.status(400).send({ message: 'Validation failed: End time is required' });
        }
        if (endTimeMills <= startTimeMills) {
            return res.status(400).send({ message: 'Validation failed: End time should be greater than start time' });
        }
        // If all validations pass, proceed to the next middleware/controller
        next();
    }
    catch (error) {
        // Handle any errors that occur during validation
        res.status(500).send({ message: 'Internal server error' });
    }
};
exports.weekdayValidation = weekdayValidation;
