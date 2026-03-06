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
exports.removeCaptain = exports.addCaptain = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
//***************************************************************************************/
//--------------------------- -addCaptain  --------------------------------------/
//**************************************************************************************/
const addCaptain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, routineId } = req.body;
    const { id } = req.user;
    try {
        // Find the routine by its ID
        const routine = yield prisma_clint_1.default.routine.findUnique({ where: { id: routineId } });
        if (!routine)
            return res.status(404).json({ message: "Routine not found" });
        // Check if the logged-in user is the owner or captain of the routine
        const isHavePermission = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId, accountId: id },
        });
        if (!isHavePermission || (!isHavePermission.captain && !isHavePermission.owner)) {
            return res.status(403).json({ message: "Only the owner and captain can modify" });
        }
        // Find the account for the new captain
        const captainAccount = yield prisma_clint_1.default.account.findUnique({ where: { username } });
        if (!captainAccount)
            return res.status(404).json({ message: "Captain account not found" });
        // Check if the captain is already a member of the routine
        const isMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId, accountId: captainAccount.id },
        });
        if (!isMember)
            return res.status(400).json({ message: "The account is not a member of the routine" });
        // Update the routine member to set them as captain if they aren't already
        if (!isMember.captain) {
            yield prisma_clint_1.default.routineMember.update({
                where: { id: isMember.id },
                data: { captain: true },
            });
        }
        res.status(200).json({ message: "Captain added successfully", captainId: captainAccount.id });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.addCaptain = addCaptain;
//***************************************************************************************/
//--------------------------- -removeCaptain  --------------------------------------/
//**************************************************************************************/
const removeCaptain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, routineId } = req.body;
    const { id } = req.user;
    try {
        // Find the routine by its ID
        const routine = yield prisma_clint_1.default.routine.findUnique({ where: { id: routineId } });
        if (!routine)
            return res.status(404).json({ message: "Routine not found" });
        // Check if the logged-in user is the owner or captain of the routine
        const isHavePermission = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId, accountId: id },
        });
        if (!isHavePermission || (!isHavePermission.captain && !isHavePermission.owner)) {
            return res.status(403).json({ message: "Only the owner and captain can modify" });
        }
        // Find the account for the captain to be removed
        const captainAccount = yield prisma_clint_1.default.account.findUnique({ where: { username } });
        if (!captainAccount)
            return res.status(404).json({ message: "Captain account not found" });
        // Check if the captain is already a member of the routine
        const isMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId, accountId: captainAccount.id },
        });
        if (!isMember)
            return res.status(400).json({ message: "The account is not a member of the routine" });
        // Prevent removal of the captain if they are the only captain or if the logged-in user is not the owner
        if (isMember.captain && isHavePermission.owner === false) {
            return res.status(403).json({ message: "You cannot remove the last captain unless you are the owner" });
        }
        // Remove the captain status
        if (isMember.captain) {
            yield prisma_clint_1.default.routineMember.update({
                where: { id: isMember.id },
                data: { captain: false },
            });
        }
        res.status(200).json({ message: "Captain removed successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.removeCaptain = removeCaptain;
