import { Request, Response } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';
import { ActiveStatus } from '../../../utils/enums'; // Adjust path as necessary

// Step 2: Consolidated the old fragmented functions into the 6 standard functions (allMembers, sendMemberRequest, updateMemberRole, removeMember, allRequest, handleRequestStatus) and standardized the JSON response formats.
// ==========================================
// 👥 MEMBERS MANAGEMENT (Collective)
// ==========================================

/**
 * GET /:routineID/members
 * Get all members in a routine with pagination
 */
export const allMembers = async (req: any, res: Response) => {
  const { routineID } = req.params;
  const { page = 1, limit = 10 } = req.query;

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: routineID },
      select: { id: true },
    });

    if (!routine) return res.status(404).json({ message: 'Routine not found' });

    const count = await prisma.routineMember.count({
      where: { routineId: routineID },
    });

    const totalPages = Math.ceil(count / parseInt(limit));

    const members = await prisma.routineMember.findMany({
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

    const formattedMembers = members.map((member) => {
      const formattedMember: any = {
        id: member.member.id,
        username: member.member.username,
        name: member.member.name,
        notificationOn: member.notificationOn,
        captain: member.captain,
        owner: member.owner,
      };
      if (member.member.image !== null) formattedMember.image = member.member.image;
      return formattedMember;
    });

    res.json({
      message: 'All Members retrieved',
      currentPage: parseInt(page),
      totalPages,
      totalCount: count,
      members: formattedMembers,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * POST /:routineID/members
 * Handles both "User requesting to join" AND "Admin adding a member directly"
 */
export const sendMemberRequest = async (req: any, res: Response) => {
  const { routineID } = req.params;
  const { targetAccountId, requestMessage } = req.body; // targetAccountId is provided if an admin adds someone directly
  const requesterId = req.user.id;

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: routineID },
      include: {
        routineMembers: true,
        RoutinesJoinRequest: true,
      },
    });

    if (!routine) return res.status(404).json({ message: "Routine not found" });

    // 💡 CASE 1: DIRECT ADDITION (Admin directly adding a target account)
    if (targetAccountId) {
      // Verify requester has permission
      const requesterPerm = routine.routineMembers.find(m => m.accountId === requesterId);
      if (!requesterPerm || (!requesterPerm.captain && !requesterPerm.owner)) {
        return res.status(403).json({ message: "Only captains and owners can directly add members" });
      }

      const alreadyMember = routine.routineMembers.some(m => m.accountId === targetAccountId);
      if (alreadyMember) return res.status(400).json({ message: "User is already a member" });

      const newMember = await prisma.routineMember.create({
        data: { accountId: targetAccountId, routineId: routineID },
      });

      // Clear pending join requests for this added user
      await prisma.routinesJoinRequest.deleteMany({
        where: { accountIdBy: targetAccountId, routineId: routineID },
      });

      return res.status(200).json({ message: "Member added successfully", newMember, routine });
    }

    // 💡 CASE 2: JOIN REQUEST (User requesting to join the routine themselves)
    const alreadyMember = routine.routineMembers.some(m => m.accountId === requesterId);
    if (alreadyMember) {
      return res.status(200).json({ message: "You are already a member", activeStatus: "joined" });
    }

    const alreadySent = routine.RoutinesJoinRequest.some(r => r.accountIdBy === requesterId);
    if (alreadySent) {
      return res.status(200).json({ message: "Request already sent", activeStatus: "request_pending" });
    }

    const newRequest = await prisma.routinesJoinRequest.create({
      data: {
        accountIdBy: requesterId,
        routineId: routineID,
        requestMessage: requestMessage || "",
      },
    });

    res.status(200).json({ message: "Request sent successfully", activeStatus: "request_pending", newRequest });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.toString() });
  }
};

// ==========================================
// 🧑‍💻 SPECIFIC MEMBER ACTIONS (Promote, Kick, Leave)
// ==========================================

/**
 * PATCH /:routineID/members/:accountId
 * Handles Promoting/Demoting Captains AND Toggling Notifications
 */
export const updateMemberRole = async (req: any, res: Response) => {
  const { routineID, accountId } = req.params;
  const { isCaptain, notificationOn } = req.body;
  const requesterId = req.user.id;

  try {
    const targetMember = await prisma.routineMember.findFirst({
      where: { routineId: routineID, accountId: accountId }
    });

    if (!targetMember) return res.status(404).json({ message: "Member not found in this routine" });

    const updateData: any = {};

    // 1. Handle Role Change (Requires routineModificationPermission middleware)
    if (typeof isCaptain === 'boolean') {
      if (isCaptain === false && targetMember.owner) {
        return res.status(403).json({ message: "You cannot demote the owner" });
      }
      updateData.captain = isCaptain;
    }

    // 2. Handle Notifications (Users toggling their own notifications)
    if (typeof notificationOn === 'boolean') {
      if (requesterId !== accountId) {
        return res.status(403).json({ message: "You can only update your own notification settings" });
      }
      updateData.notificationOn = notificationOn;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No valid update fields provided (isCaptain, notificationOn)" });
    }

    const updatedMember = await prisma.routineMember.update({
      where: { id: targetMember.id },
      data: updateData,
    });

    res.json({ message: "Member updated successfully", updatedMember });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.toString() });
  }
};

/**
 * DELETE /:routineID/members/:accountId
 * Handles 'Leave Routine', 'Kick Out', and 'Remove Member'
 */
export const removeMember = async (req: any, res: Response) => {
  const { routineID, accountId } = req.params;
  const requesterId = req.user.id;

  try {
    const targetMember = await prisma.routineMember.findFirst({
      where: { routineId: routineID, accountId: accountId },
    });

    if (!targetMember) return res.status(404).json({ message: "Member is not part of this routine" });

    // 1. Is this a LEAVE action? (User deleting themselves)
    if (requesterId === accountId) {
      if (targetMember.owner) return res.status(403).json({ message: "Owners cannot leave their own routine" });
    } 
    // 2. Is this a KICK/REMOVE action? (Admin deleting someone else)
    else {
      if (targetMember.owner) return res.status(403).json({ message: "The owner cannot be removed" });
      // Step 2: Ensure only routine owners or captains can kick out other members
      const requesterMember = await prisma.routineMember.findFirst({
        where: { routineId: routineID, accountId: requesterId },
      });
      if (!requesterMember || (!requesterMember.captain && !requesterMember.owner)) {
        return res.status(403).json({ message: "Only captains and owners can remove members" });
      }
    }

    // Delete the member record
    await prisma.routineMember.delete({ where: { id: targetMember.id } });

    res.json({
      message: requesterId === accountId ? "You have successfully left the routine" : "Member removed successfully",
      activeStatus: requesterId === accountId ? ActiveStatus.NOT_JOINED : undefined
    });

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.toString() });
  }
};

// ==========================================
// 📩 MEMBER REQUESTS (Get, Accept, Reject)
// ==========================================

/**
 * GET /:routineID/requests
 * View all pending join requests
 */
export const allRequest = async (req: any, res: Response) => {
  const { routineID } = req.params;

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: routineID },
      select: {
        id: true,
        RoutinesJoinRequest: {
          select: {
            id: true,
            requestMessage: true,
            createdAt: true,
            requestedAccount: {
              select: { id: true, username: true, name: true, image: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!routine) return res.status(404).json({ message: 'Routine not found' });

    const formattedRequests = routine.RoutinesJoinRequest.map(request => ({
      id: request.requestedAccount?.id,
      requestId: request.id, // Needed for the PATCH route later
      username: request.requestedAccount?.username,
      name: request.requestedAccount?.name,
      image: request.requestedAccount?.image || undefined,
      requestMessage: request.requestMessage,
      createdAt: request.createdAt,
    }));

    res.json({
      message: 'All new requests',
      count: formattedRequests.length,
      allRequest: formattedRequests,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.toString() });
  }
};

/**
 * PATCH /:routineID/requests/:requestId
 * Accept or Reject single requests OR Accept all
 */
export const handleRequestStatus = async (req: any, res: Response) => {
  const { routineID, requestId } = req.params;
  const { status, acceptAll } = req.body; // status should be "ACCEPTED" or "REJECTED"

  try {
    const routine = await prisma.routine.findUnique({
      where: { id: routineID },
      include: { RoutinesJoinRequest: true },
    });

    if (!routine) return res.status(404).json({ message: "Routine not found" });

    // 💡 Bulk Accept Logic
    if (acceptAll === true || acceptAll === 'true') {
      for (const request of routine.RoutinesJoinRequest) {
        const isMember = await prisma.routineMember.findFirst({
          where: { accountId: request.accountIdBy, routineId: routineID },
        });

        if (!isMember) {
          await prisma.$transaction([
            prisma.routinesJoinRequest.delete({ where: { id: request.id } }),
            prisma.routineMember.create({ data: { accountId: request.accountIdBy, routineId: routineID } }),
          ]);
        } else {
          // If they are already a member somehow, just clear the request
          await prisma.routinesJoinRequest.delete({ where: { id: request.id } });
        }
      }
      return res.json({ message: "All requests accepted" });
    }

    // 💡 Single Accept/Reject Logic
    const joinRequest = await prisma.routinesJoinRequest.findUnique({ where: { id: requestId } });
    if (!joinRequest || joinRequest.routineId !== routineID) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (status === 'ACCEPTED') {
      const isMember = await prisma.routineMember.findFirst({
        where: { accountId: joinRequest.accountIdBy, routineId: routineID },
      });

      if (!isMember) {
        await prisma.$transaction([
          prisma.routinesJoinRequest.delete({ where: { id: requestId } }),
          prisma.routineMember.create({ data: { accountId: joinRequest.accountIdBy, routineId: routineID } }),
        ]);
      } else {
        await prisma.routinesJoinRequest.delete({ where: { id: requestId } });
      }
      return res.json({ message: "Request accepted and member added" });

    } else if (status === 'REJECTED') {
      await prisma.routinesJoinRequest.delete({ where: { id: requestId } });
      return res.json({ message: "Member request rejected successfully" });
      
    } else {
      return res.status(400).json({ message: "Invalid status. Use 'ACCEPTED' or 'REJECTED'." });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.toString() });
  }
};