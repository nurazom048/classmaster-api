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
exports.routineModificationPermission = exports.summaryModificationPermission = exports.summaryAddPermission = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
//@ summaryAddPermission
const summaryAddPermission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { classID } = req.params;
    const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        // Step 1: Validate classId presence
        if (!classID) {
            return res.status(400).json({ message: "Validation failed: 'classID' is required." });
        }
        // Step 2: Find the class and associated routine in a single query
        const findClass = yield prisma_clint_1.default.class.findUnique({
            where: { id: classID },
            include: { routine: true },
        });
        if (!findClass || !findClass.routine) {
            return res.status(404).json({ message: "Class or associated routine not found." });
        }
        const routineId = findClass.routine.id;
        // Step 3: Check user's membership and role (owner or captain)
        const routineMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                routineId: routineId,
                accountId: userID,
            },
        });
        if (!routineMember || (!routineMember.owner && !routineMember.captain)) {
            return res.status(403).json({ message: "Only captains and owners can add summaries." });
        }
        // Allow the request to proceed
        next();
    }
    catch (error) {
        console.error("Error in summaryPermission middleware:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
});
exports.summaryAddPermission = summaryAddPermission;
//@ summaryModificationPermission
const summaryModificationPermission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { summaryID } = req.params;
    const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        if (!summaryID) {
            return res.status(400).json({ message: "Validation failed: 'summaryID' is required." });
        }
        // Find the summary and its associated routine
        const findSummary = yield prisma_clint_1.default.summary.findUnique({
            where: { id: summaryID },
            include: { routine: true },
        });
        if (!findSummary) {
            return res.status(404).json({ message: "Summary not found." });
        }
        // Check if user is a routine member with permission
        const routineMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                routineId: findSummary.routineId,
                accountId: userID,
            },
        });
        if (!routineMember || (!routineMember.captain && findSummary.routine.ownerAccountId !== userID)) {
            return res.status(403).json({ message: "Only captains and owners can modify or remove summaries." });
        }
        // Attach the summary to the request for use in subsequent functions
        req.findSummary = findSummary;
        next();
    }
    catch (error) {
        console.error("Error in summary modification permission middleware:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
});
exports.summaryModificationPermission = summaryModificationPermission;
//@ RoutineModificationPermission
const routineModificationPermission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { id } = req.user;
    try {
        // Step 1: Check if routine exists
        const routine = yield prisma_clint_1.default.routine.findFirst({ where: { id: routineID } });
        if (!routine)
            return res.status(404).send({ message: 'Routine not found' });
        // Step 2: Check permission: owner or captain
        const routineMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId: routine.id, accountId: id },
        });
        if (!routineMember || (!routineMember.captain && routine.ownerAccountId.toString() !== id)) {
            return res.status(401).json({ message: 'Only captains and owners can Modify Routine' });
        }
        next();
    }
    catch (error) {
        console.error('Error in checkClassAndPermission middleware:', error);
        res.status(500).send({ message: 'Server error' });
    }
});
exports.routineModificationPermission = routineModificationPermission;
