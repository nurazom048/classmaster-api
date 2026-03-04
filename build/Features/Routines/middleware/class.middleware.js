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
exports.checkClassAndPermission = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
const checkClassAndPermission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { classID } = req.params;
    const { id } = req.user;
    try {
        // Step 1: Check if class exists
        const classData = yield prisma_clint_1.default.class.findFirst({ where: { id: classID } });
        if (!classData) {
            return res.status(404).send({ message: 'Class not found' });
        }
        // Step 2: Check if routine exists
        const routine = yield prisma_clint_1.default.routine.findFirst({ where: { id: classData.routineId } });
        if (!routine) {
            return res.status(404).send({ message: 'Routine not found' });
        }
        // Step 3: Check permission: owner or captain
        const routineMember = yield prisma_clint_1.default.routineMember.findFirst({
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
    }
    catch (error) {
        console.error('Error in checkClassAndPermission middleware:', error);
        res.status(500).send({ message: 'Server error' });
    }
});
exports.checkClassAndPermission = checkClassAndPermission;
