import { Router } from 'express';
import multer from 'multer';
import {
    addSummary,
    removeSummary,
    get_summary_list,
    saveUnsaveSummary,
    summary_status
} from '../controllers/summary_controller';
import { verifyToken } from '../../../services/Authentication/helper/Authentication';
import { validateSummaryRequest } from '../middleware/summary_middleware';
import { summaryAddPermission, summaryModificationPermission } from '../../Routines/middleware/permission.routine.mid';

const router = Router();

// ⚙️ Multer Setup - 10MB Limit
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, 
});

// ==========================================
// 📚 SUMMARIES (List & Add)
// ==========================================

// 💡 GET: Replaces both `/saved` and `/classes/:classID`
// Fetch a specific class: /?classId=1234
// Fetch saved summaries:  /?type=saved
router.route('/')
    .get(verifyToken, get_summary_list);

// 💡 POST: Creates a new summary for a specific class
router.route('/class/:classID')
    .post(
        verifyToken,
        upload.array('files', 12),
        validateSummaryRequest,
        summaryAddPermission,
        addSummary
    );

// ==========================================
// ⚙️ INDIVIDUAL SUMMARY ACTIONS
// ==========================================

// 💡 Status & Deletion
router.route('/:summaryID')
    .get(verifyToken, summary_status)
    .delete(verifyToken, summaryModificationPermission, removeSummary);

// 💡 Toggle Save status
router.route('/:summaryID/save-toggle')
    .post(verifyToken, saveUnsaveSummary);

export default router;