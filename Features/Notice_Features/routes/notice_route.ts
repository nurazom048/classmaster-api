import express from 'express';
const router = express.Router();
import { verifyToken } from "../../../services/Authentication/helper/Authentication";
import multer from 'multer';
import {
    addNotice,
    deleteNotice,
    current_user_status,
    joinNoticeboard,
    leaveMember,
    recentNotice,
    recentNoticeByAcademeID,
    updateNotification,
    getNoticeById,

} from "../controllers/notice_controller";
import { checkAccountType } from '../middleware/notice.middleware'

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only PDF files are allowed'));
        }
        cb(null, true);
    }
});


// ============================================================================
// RESTful API ROUTES
// ============================================================================

// 1. Notices (General)
router.route("/")
    .get(verifyToken, recentNotice)                               // Get home feed
    .post(verifyToken, checkAccountType, upload.single('pdf_file'), addNotice); // Create notice
// Add this route in your ROUTES section
router.route("/:noticeId").get(getNoticeById);


router.route("/:noticeId")
    .delete(verifyToken, deleteNotice);                           // Delete notice

// 2. Academy Specific Notices & Status
router.route("/academy/:academyID")
    .get(verifyToken, recentNoticeByAcademeID);                   // Get academy notices

router.route("/academy/:academyID/status")
    .get(verifyToken, current_user_status);                       // Check member status

// 3. Noticeboard Membership
router.route("/academy/:academyID/member")
    .post(verifyToken, joinNoticeboard)                           // Join noticeboard
    .delete(verifyToken, leaveMember);                            // Leave noticeboard

// 4. Notifications
router.route("/academy/:academyID/notification")
    .put(verifyToken, updateNotification);                        // Toggle notifications on/off

export default router;
