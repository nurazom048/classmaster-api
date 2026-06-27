import { Router } from 'express';
// Import your middlewares and controllers here...
import { verifyToken } from '../../../services/Authentication/helper/Authentication';
import { routineModificationPermission } from '../middleware/permission.routine.mid';
import { allMembers, allRequest, handleRequestStatus, removeMember, sendMemberRequest, updateMemberRole } from '../controllers/routine_members_controller';

const router = Router();// Step 1: Updated routine.routes.ts (routine_member.route.ts) by deleting all old routes and defining standard RESTful routes.

// ==========================================
// 👥 MEMBERS (General, Captains, Owners)
// ==========================================

// 💡 Handle the collective group of members
router.route('/:routineID/members')
    .get(verifyToken, allMembers) // Get all members
    .post(verifyToken, sendMemberRequest); // Join request / Add member directly

// 💡 Handle a specific member (Promote, Demote, Leave, Kick)
// Note: We use :accountId here because your RoutineMember schema uses accountId
router.route('/:routineID/members/:accountId')
    .patch(verifyToken, routineModificationPermission, updateMemberRole) // 🆕 Replaces /captain (Make/Remove Captain)
    .delete(verifyToken, removeMember); // 🆕 Handles Leave, Kickout, and Remove

// ==========================================
// 📩 MEMBER REQUESTS (Approve/Reject)
// ==========================================

// 💡 Handle the collective requests
router.route('/:routineID/requests')
    .get(verifyToken, allRequest); // View all requests

// 💡 Handle a specific request (Accept or Reject via PATCH)
router.route('/:routineID/requests/:requestId')
    .patch(verifyToken, routineModificationPermission, handleRequestStatus);

export default router;
