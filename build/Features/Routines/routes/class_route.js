"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const class_controllers_1 = require("../controllers/class_controllers");
const routine_validation_1 = require("../validation/routine.validation");
const Authentication_1 = require("../../../services/Authentication/helper/Authentication");
const class_middleware_1 = require("../middleware/class.middleware");
//
// 3
app.post('/:routineId/addclass', Authentication_1.verifyToken, routine_validation_1.classValidation, routine_validation_1.cakedPermission, class_controllers_1.create_class);
app.post('/edit/:classID', Authentication_1.verifyToken, routine_validation_1.classEditValidation, class_middleware_1.checkClassAndPermission, class_controllers_1.editClass);
app.delete('/remove/:classID', Authentication_1.verifyToken, class_middleware_1.checkClassAndPermission, class_controllers_1.remove_class);
//
app.get('/:routineID/all/class', class_controllers_1.allClass);
// app.post('/:routineID/all/class', verifyToken, allClass);
app.get('/find/class/:classID', class_controllers_1.findClass);
// notification
app.post('/notification', Authentication_1.verifyToken, class_controllers_1.classNotification);
// weekday
app.put('/weekday/:classID', routine_validation_1.weekdayValidation, class_controllers_1.addWeekday);
app.delete('/weekday/:weekdayID', class_controllers_1.deleteWeekdayById);
// show weekday by class
app.get('/weekday/show/:ClassID', class_controllers_1.allWeekdayInClass);
exports.default = app;
