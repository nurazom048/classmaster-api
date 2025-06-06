"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const summary_controller_1 = require("../controllers/summary_controller");
const Authentication_1 = require("../../../services/Authentication/helper/Authentication");
const routines_middleware_1 = require("../middleware/routines.middleware");
const permission_routine_mid_1 = require("../middleware/permission.routine.mid");
const app = (0, express_1.default)();
// Set up multer with the storage
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    //limits: { fileSize: 5 * 1024 * 1024 }
});
// 1 add summary
app.post("/add/:classID", upload.array('imageLinks', 12), Authentication_1.verifyToken, routines_middleware_1.validateSummaryAddRequest, permission_routine_mid_1.summaryAddPermission, summary_controller_1.addSummary);
app.delete("/:summaryID", Authentication_1.verifyToken, permission_routine_mid_1.summaryModificationPermission, summary_controller_1.removeSummary);
app.post("/save", Authentication_1.verifyToken, summary_controller_1.saveUnsaveSummary); // save
app.post("/status/:summaryID", Authentication_1.verifyToken, summary_controller_1.summary_status);
// app.post("/edit/:summaryID", verifyToken, update_summary);
// 2 summary
app.get("/:classID", Authentication_1.verifyToken, summary_controller_1.get_class_summary_list); // get class summary
app.get("/", Authentication_1.verifyToken, summary_controller_1.get_class_summary_list); // get saved summary
exports.default = app;
