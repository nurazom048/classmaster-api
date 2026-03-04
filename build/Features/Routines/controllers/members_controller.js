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
exports.notification_Off = exports.notification_On = exports.kickOut = exports.leaveMember = exports.rejectMember = exports.acceptRequest = exports.allRequest = exports.allMembers = exports.sendMemberRequest = exports.removeMember = exports.addMember = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
const utils_1 = require("../../../utils/utils");
const enums_1 = require("../../../utils/enums");
//**********  addMembers   ************* */
const addMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID, username } = req.params;
    try {
        // Step 1: Check if the member's account exists
        const memberAccount = yield prisma_clint_1.default.account.findUnique({
            where: { username },
        });
        if (!memberAccount)
            return res.status(404).json({ message: "Account not found" });
        // Step 2: Find the routine to add the member to
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
        });
        if (!routine)
            return res.status(404).json({ message: "Routine not found" });
        // Step 3: Check if the member is already added to the routine
        const alreadyAdded = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                routineId: routineID,
                accountId: memberAccount.id,
            },
        });
        if (alreadyAdded)
            return res.json({ message: "Member already added" });
        // Step 4: Add the member to the routine
        const addMember = yield prisma_clint_1.default.routineMember.create({
            data: {
                accountId: memberAccount.id,
                routineId: routine.id,
                notificationOn: false, // Default value
                captain: false, // Default value
                owner: false, // Default value
                isSaved: false, // Default value
                blacklist: false, // Default value
            },
        });
        // Step 5: Return the response with the added member details
        res.json({
            message: "Member added successfully",
            addMember,
            routine,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.addMember = addMember;
//**********  removeMember   ************* */
const removeMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID, username } = req.params;
    try {
        // Step 1: Find the account by username
        const memberAccount = yield prisma_clint_1.default.account.findUnique({
            where: { username },
        });
        if (!memberAccount) {
            return res.status(404).json({ message: "Account not found" });
        }
        // Step 2: Check if the routine exists
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
        });
        if (!routine) {
            return res.status(404).json({ message: "Routine not found" });
        }
        // Step 3: Check if the user is a member of the routine
        const memberEntry = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                routineId: routineID,
                accountId: memberAccount.id,
            },
        });
        if (!memberEntry) {
            return res.status(400).json({ message: "Member is not part of this routine" });
        }
        // Step 4: Remove the member from the routine
        yield prisma_clint_1.default.routineMember.delete({
            where: { id: memberEntry.id },
        });
        res.json({ message: "Member removed successfully" });
    }
    catch (error) {
        console.error(error);
        res.json({ message: error.toString() });
    }
});
exports.removeMember = removeMember;
//***********  sendMemberRequest *************/
const sendMemberRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { username } = req.user;
    let activeStatus = "not_joined";
    try {
        // Find the member account using Prisma
        const member_ac = yield prisma_clint_1.default.account.findUnique({
            where: { username },
        });
        if (!member_ac) {
            return res.status(404).json({ message: "Account not found" });
        }
        // Find the routine using Prisma
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
            include: {
                routineMembers: true, // Fetch related members to check if already joined
                RoutinesJoinRequest: true, // Fetch requests to check if already sent
            },
        });
        if (!routine) {
            return res.status(404).json({ message: "Routine not found" });
        }
        // Check if the member is already a part of the routine
        const isMember = routine.routineMembers.some((member) => member.accountId === member_ac.id);
        if (isMember) {
            activeStatus = "joined";
            return res.status(200).json({
                message: "User is already a member of the routine",
                activeStatus,
            });
        }
        // Check if the member's request has already been sent
        const alreadySent = routine.RoutinesJoinRequest.some((request) => request.accountIdBy === member_ac.id);
        if (alreadySent) {
            activeStatus = "request_pending";
            return res.status(200).json({
                message: "Request already sent",
                activeStatus,
            });
        }
        // Create a new join request
        const newRequest = yield prisma_clint_1.default.routinesJoinRequest.create({
            data: {
                accountIdBy: member_ac.id,
                routineId: routine.id,
                requestMessage: req.body.requestMessage || "", // Optional request message
            },
        });
        activeStatus = "request_pending";
        res.status(200).json({
            message: "Request sent successfully",
            activeStatus,
            newRequest,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.sendMemberRequest = sendMemberRequest;
//******* All Members in the  Routine  ***************/
const allMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { page = 1, limit = 10 } = req.query;
    try {
        // Step 1: Find the routine and check if it exists
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
            select: { id: true }, // We only need the routine ID to verify existence
        });
        if (!routine) {
            return res.status(404).json({ message: 'Routine not found' });
        }
        // Step 2: Count the total number of members
        const count = yield prisma_clint_1.default.routineMember.count({
            where: { routineId: routineID },
        });
        // Step 3: Calculate the total number of pages
        const totalPages = Math.ceil(count / parseInt(limit));
        // Step 4: Find the members with pagination and populate memberID
        const members = yield prisma_clint_1.default.routineMember.findMany({
            where: { routineId: routineID },
            select: {
                id: true,
                notificationOn: true,
                captain: true,
                owner: true,
                member: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        image: true,
                    },
                },
            },
            skip: (page - 1) * parseInt(limit),
            take: parseInt(limit),
            orderBy: { createdAt: 'desc' },
        });
        // Step 5: Format the response, removing null fields
        const formattedMembers = members.map((member) => {
            const formattedMember = {
                id: member.member.id,
                username: member.member.username,
                name: member.member.name,
                notificationOn: member.notificationOn,
                captain: member.captain,
                owner: member.owner,
            };
            // Only add image if it's not null
            if (member.member.image !== null) {
                formattedMember.image = member.member.image;
            }
            // Remove null fields from formatted member object
            return Object.fromEntries(Object.entries(formattedMember).filter(([_, v]) => v != null));
        });
        // Step 6: Return the response
        res.json({
            message: 'All Members',
            currentPage: parseInt(page),
            totalPages,
            totalCount: count,
            members: formattedMembers,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
exports.allMembers = allMembers;
//**********  see all member in routine    ************* */
const allRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    try {
        // Step 1: Find the routine and associated join requests
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
            select: {
                id: true,
                RoutinesJoinRequest: {
                    select: {
                        id: true,
                        requestMessage: true,
                        requestedAccount: {
                            select: {
                                id: true,
                                username: true,
                                name: true,
                                image: true,
                            }
                        },
                        createdAt: true,
                    },
                    orderBy: {
                        createdAt: 'desc', // Sort by creation date
                    },
                },
            },
        });
        if (!routine) {
            return res.status(404).json({ message: 'Routine not found' });
        }
        const count = routine.RoutinesJoinRequest.length; // Count the requests
        // Step 2: Format the response to exclude null fields
        const formattedRequests = routine.RoutinesJoinRequest.map(request => {
            const { requestedAccount, requestMessage, createdAt } = request;
            const { id, username, name, image } = requestedAccount || {};
            return {
                id,
                username,
                name,
                image: image ? image : undefined, // Don't include image if it's null
                requestMessage,
                createdAt,
            };
        });
        // Step 3: Return the formatted response
        res.json({
            message: 'All new requests',
            count,
            allRequest: formattedRequests,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.allRequest = allRequest;
//**********  acceptRequest    ************* */
const acceptRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { username, acceptAll } = req.body;
    try {
        // Find the routine by ID
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: {
                id: routineID,
            },
            include: {
                RoutinesJoinRequest: true, // Include join requests related to the routine
            },
        });
        if (!routine) {
            return res.status(404).json({ message: "Routine not found" });
        }
        if (acceptAll === 'true') {
            // Accept all the requests in this routine
            for (let i = 0; i < routine.RoutinesJoinRequest.length; i++) {
                const request = routine.RoutinesJoinRequest[i];
                const memberId = request.accountIdBy;
                // Check if the member is already a member of the routine
                const isMember = yield prisma_clint_1.default.routineMember.findFirst({
                    where: {
                        accountId: memberId,
                        routineId: routineID,
                    },
                });
                if (!isMember) {
                    // Perform the transaction to delete request and add the member to the routine
                    yield prisma_clint_1.default.$transaction([
                        prisma_clint_1.default.routinesJoinRequest.deleteMany({
                            where: {
                                accountIdBy: memberId,
                                routineId: routineID,
                            },
                        }),
                        prisma_clint_1.default.routineMember.create({
                            data: {
                                accountId: memberId,
                                routineId: routineID,
                            },
                        }),
                    ]);
                }
            }
            return res.json({ message: "All requests accepted" });
        }
        // Find the member account by username
        const member = yield prisma_clint_1.default.account.findUnique({
            where: {
                username: username,
            },
        });
        if (!member) {
            return res.status(404).json({ message: "Account not found" });
        }
        // Check if the member is already a member of the routine
        const isMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                accountId: member.id,
                routineId: routineID,
            },
        });
        if (isMember) {
            return res.status(400).json({ message: "User is already a member" });
        }
        // Perform the transaction to delete the join request and add the member
        yield prisma_clint_1.default.$transaction([
            prisma_clint_1.default.routinesJoinRequest.deleteMany({
                where: {
                    accountIdBy: member.id,
                    routineId: routineID,
                },
            }),
            prisma_clint_1.default.routineMember.create({
                data: {
                    accountId: member.id,
                    routineId: routineID,
                },
            }),
        ]);
        res.json({ message: "Request accepted" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.acceptRequest = acceptRequest;
//*********** rejectMember *********************/
const rejectMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { username } = req.body;
    try {
        // Find the account by username
        const member = yield prisma_clint_1.default.account.findUnique({
            where: { username: username },
        });
        if (!member) {
            return res.status(404).json({ message: "Account not found" });
        }
        // Check if a join request exists for this user and routine
        const joinRequest = yield prisma_clint_1.default.routinesJoinRequest.findFirst({
            where: {
                accountIdBy: member.id,
                routineId: routineID,
            },
        });
        if (!joinRequest) {
            return res.status(404).json({ message: "Join request not found" });
        }
        // Delete the join request
        yield prisma_clint_1.default.routinesJoinRequest.delete({
            where: { id: joinRequest.id },
        });
        res.status(200).json({ message: "Member request rejected successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.rejectMember = rejectMember;
//******************** Leave Members Functionality *****************//
const leaveMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { id } = req.user;
    try {
        // Step 1: Find the Routine
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
        });
        if (!routine)
            return res.status(404).json({ message: "Routine not found" });
        // Step 2: Check if the user is a member and not the owner
        const member = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                accountId: id,
                routineId: routineID,
            },
        });
        if (!member) {
            return res.status(404).json({ message: "User is not a member" });
        }
        if (member.owner) {
            return res.status(403).json({ message: "Owners cannot leave the routine" });
        }
        // Step 3: Remove the member and send a success message
        const leaveMember = yield prisma_clint_1.default.routineMember.delete({
            where: {
                id: member.id,
            },
        });
        res.json({
            message: "Routine leave successful",
            activeStatus: enums_1.ActiveStatus.NOT_JOINED, // Use the enum value here
            routine: leaveMember,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
exports.leaveMember = leaveMember;
//***************** Kick Out Member ************************//
const kickOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID, memberID } = req.params;
    const { id } = req.user;
    try {
        // Step 1: Find the Routine and check permission
        const routine = yield prisma_clint_1.default.routine.findUnique({
            where: { id: routineID },
        });
        if (!routine)
            return res.status(404).json({ message: "Routine not found" });
        // Check if the current user is the owner of the routine
        if (routine.ownerAccountId !== id)
            return res.status(403).json({ message: "Only the owner can kick out members" });
        // Step 2: Check if the member is in the routine
        const member = yield prisma_clint_1.default.routineMember.findFirst({
            where: {
                accountId: memberID,
                routineId: routineID,
            },
        });
        if (!member) {
            return res.status(404).json({ message: "Member not found in this routine" });
        }
        // Step 3: Prevent kicking out the owner
        if (member.owner) {
            return res.status(400).json({ message: "The owner cannot be removed from the routine" });
        }
        // Step 4: Remove the member
        yield prisma_clint_1.default.routineMember.delete({ where: { id: member.id } });
        res.json({ message: "Member successfully removed from the routine" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while removing the member" });
    }
});
exports.kickOut = kickOut;
//***************************************************************************************/
//----------------------------notification on/off --------------------------------------/
//**************************************************************************************/
const notification_On = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params;
    const { id: userId } = req.user;
    if (!routineID) {
        return res.status(400).json({ message: "Routine ID is required" });
    }
    try {
        // Find the routine by ID
        const routine = yield prisma_clint_1.default.routine.findUnique({ where: { id: routineID } });
        if (!routine) {
            return res.status(404).json({ message: "Routine not found" });
        }
        // Check if the user is a member of this routine
        const isMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId: routineID, accountId: userId },
        });
        if (!isMember) {
            return res.status(403).json({ message: "You are not a member of this routine" });
        }
        // Check if notifications are already turned on
        if (isMember.notificationOn) {
            return res.status(200).json({
                message: "Notifications are already turned on",
                notificationOn: true,
            });
        }
        // Update the `notificationOn` field to `true`
        yield prisma_clint_1.default.routineMember.update({
            where: { id: isMember.id },
            data: { notificationOn: true },
        });
        res.status(200).json({ message: "Notifications turned on", notificationOn: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.notification_On = notification_On;
const notification_Off = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { routineID } = req.params; // Use camelCase for consistency
    const { id: userId } = req.user; // Destructure `id` as `userId` for clarity
    (0, utils_1.printD)('printing notificationOff');
    try {
        // Find the routine by ID
        const routine = yield prisma_clint_1.default.routine.findUnique({ where: { id: routineID } });
        if (!routine) {
            return res.status(404).json({ message: "Routine not found" });
        }
        // Check if the user is a member of this routine
        const isMember = yield prisma_clint_1.default.routineMember.findFirst({
            where: { routineId: routineID, accountId: userId },
        });
        if (!isMember) {
            return res.status(403).json({ message: "You are not a member of this routine" });
        }
        // Check if notifications are already turned off
        if (!isMember.notificationOn) {
            return res
                .status(200)
                .json({ message: "Notifications are already turned off", notificationOn: false });
        }
        // Update the `notificationOn` field to `false`
        yield prisma_clint_1.default.routineMember.update({
            where: { id: isMember.id },
            data: { notificationOn: false },
        });
        res.status(200).json({ message: "Notifications turned off", notificationOn: false });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.toString() });
    }
});
exports.notification_Off = notification_Off;
