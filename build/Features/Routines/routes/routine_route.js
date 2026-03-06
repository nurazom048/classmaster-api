"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Authentication_1 = require("../../../services/Authentication/helper/Authentication");
const app = (0, express_1.default)();
const routine_controllers_1 = require("../controllers/routine.controllers");
const members_controller_1 = require("../controllers/members_controller");
const captans_controller_1 = require("../controllers/captans.controller");
const routines_middleware_1 = require("../middleware/routines.middleware");
const permission_routine_mid_1 = require("../middleware/permission.routine.mid");
//
//
//
//
//****************************************************************************/
//............................... Routine...................................../
//****************************************************************************/
app.post("/create", Authentication_1.verifyToken, routines_middleware_1.createRoutineValidation, routine_controllers_1.createRoutine); // for create routine
app.delete("/:routineID", Authentication_1.verifyToken, permission_routine_mid_1.routineModificationPermission, routine_controllers_1.deleteRoutineById); // delete routine
app.post("/home/:userID", Authentication_1.verifyToken, routine_controllers_1.homeFeed); /// feed {user can see her uploaded routines}
app.post("/home", Authentication_1.verifyToken, routine_controllers_1.homeFeed); /// feed {user can see her uploaded routines and joined routines}
//.. search routine ...//
app.get('/search', routine_controllers_1.searchRoutine);
app.route("/save/routines").post(Authentication_1.verifyToken, routine_controllers_1.save_routines); //... Show save routine
app.post('/save_unsave/:routineId', Authentication_1.verifyToken, routine_controllers_1.save_and_unsave_routine); // 2
//****************************************************************************/
//............................... Members and captain.........................//
//****************************************************************************/
//....... Captain .....//
app.post('/captain/add', Authentication_1.verifyToken, captans_controller_1.addCaptain);
app.delete('/captain/remove', Authentication_1.verifyToken, captans_controller_1.removeCaptain);
//........... Add member .....//
app.post('/member/add/:routineID/:username', Authentication_1.verifyToken, permission_routine_mid_1.routineModificationPermission, members_controller_1.addMember);
app.post('/member/remove/:routineID/:username', Authentication_1.verifyToken, permission_routine_mid_1.routineModificationPermission, members_controller_1.removeMember);
app.post('/member/:routineID/', members_controller_1.allMembers);
app.post('/member/leave/:routineID', Authentication_1.verifyToken, members_controller_1.leaveMember);
app.delete('/member/kickout/:routineID/:memberID', Authentication_1.verifyToken, permission_routine_mid_1.routineModificationPermission, members_controller_1.kickOut);
//
app.post('/member/send_request/:routineID', Authentication_1.verifyToken, members_controller_1.sendMemberRequest);
app.post('/member/see_all_request/:routineID', Authentication_1.verifyToken, members_controller_1.allRequest);
app.post('/member/accept_request/:routineID', Authentication_1.verifyToken, members_controller_1.acceptRequest);
app.post('/member/reject_request/:routineID', Authentication_1.verifyToken, members_controller_1.rejectMember);
//notification on off
app.post('/notification/off/:routineID', Authentication_1.verifyToken, members_controller_1.notification_Off);
app.post('/notification/on/:routineID', Authentication_1.verifyToken, members_controller_1.notification_On);
//.. check current status ...//
app.post('/status/:routineId/', Authentication_1.verifyToken, routine_controllers_1.current_user_status);
exports.default = app;
