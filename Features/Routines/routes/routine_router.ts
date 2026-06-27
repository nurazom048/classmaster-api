import { Router } from 'express';
// Import your middlewares and controllers here...
import { classValidation, cakedPermission, classEditValidation, weekdayValidation } from '../validation/routine.validation';
import { listRoutines, createRoutine, current_user_status, deleteRoutineById, save_and_unsave_routine, allClass, create_class, findClass, editClass, remove_class, classNotification, allWeekdayInClass, addWeekday, deleteWeekdayById, superUpdateClass } from '../controllers/routine.controllers';
import { verifyToken } from '../../../services/Authentication/helper/Authentication';
import { checkClassAndPermission, checkDuplicateClass } from '../middleware/class.middleware';
import { routineModificationPermission } from '../middleware/permission.routine.mid';

const router = Router();

// ==========================================
// 🌐 GLOBAL ROUTINE ACTIONS (List, Search, Saved, Create)
// ==========================================

// 💡 ONE ENDPOINT for everything! 
// Use queries: /?type=saved, /?search=math, /?username=captain_john
router.route('/')
    .get(verifyToken, listRoutines) // 🆕 Replaces homeFeed, searchRoutine, and save_routines
    .post(verifyToken, createRoutine); // 🆕 Replaces /create

// ==========================================
// 🏫 ROUTINE CLASSES
// ==========================================

router.route('/:routineID/classes')
    .get(allClass)
    .post(verifyToken, classValidation, cakedPermission, checkDuplicateClass, create_class);

router.route('/classes/notification')
    .post(verifyToken, classNotification);

// 💡 STANDALONE CLASS ROUTE (Find, Edit, Super-Update, Delete)
router.route('/classes/:classID')
    .get(findClass)
    .put(verifyToken, classEditValidation, checkClassAndPermission, checkDuplicateClass, editClass) // Standard edit (e.g., just name/instructor)
    // not for now implent on dart  
    .patch(verifyToken, checkClassAndPermission, checkDuplicateClass, superUpdateClass) // 🦸‍♂️ SUPER ROUTE: Edit class details + Add Weekdays + Remove Weekdays in one payload
    .delete(verifyToken, checkClassAndPermission, remove_class);

router.route('/classes/:classID/weekdays')
    .get(allWeekdayInClass)
    .post(weekdayValidation, addWeekday); // Changed to POST (standard for adding new items)

router.route('/weekdays/:weekdayID')
    .delete(deleteWeekdayById);

// ==========================================
// 🎯 SPECIFIC ROUTINE ACTIONS
// ==========================================

router.route('/:routineID')
    .get(verifyToken, current_user_status)
    .delete(verifyToken, routineModificationPermission, deleteRoutineById);

router.route('/:routineID/save-toggle')
    .post(verifyToken, save_and_unsave_routine);






export default router;