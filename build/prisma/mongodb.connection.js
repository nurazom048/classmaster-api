"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDB = exports.RoutineDB = exports.NoticeDB = exports.maineDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Direct Database Connection Strings
const mongodbUri_Production_Maine_DB = 'mongodb+srv://eduClassmateMongodb:rahalaNur123@clusteeduclassmate.4ccnh3n.mongodb.net/MainBD?retryWrites=true&w=majority';
const mongodbUri_Production_Notice_DB = 'mongodb+srv://eduClassmateMongodb:rahalaNur123@clusteeduclassmate.4ccnh3n.mongodb.net/NoticeDB?retryWrites=true&w=majority';
const mongodbUri_Production_Routine_DB = 'mongodb+srv://eduClassmateMongodb:rahalaNur123@clusteeduclassmate.4ccnh3n.mongodb.net/RoutineDB?retryWrites=true&w=majority';
const mongodbUri_Production_NotificationDB = 'mongodb+srv://eduClassmateMongodb:rahalaNur123@clusteeduclassmate.4ccnh3n.mongodb.net/NotificationDB?retryWrites=true&w=majority';
// Connect to the Main Database
exports.maineDB = mongoose_1.default.createConnection(mongodbUri_Production_Maine_DB);
exports.maineDB.once('open', () => console.log('Connected to Main Database'));
// Connect to the Notice Database
exports.NoticeDB = mongoose_1.default.createConnection(mongodbUri_Production_Notice_DB);
exports.NoticeDB.once('open', () => console.log('Connected to Notice Database'));
// Connect to the Routine Database
exports.RoutineDB = mongoose_1.default.createConnection(mongodbUri_Production_Routine_DB);
exports.RoutineDB.once('open', () => console.log('Connected to Routine Database'));
// Connect to the Notification Database
exports.NotificationDB = mongoose_1.default.createConnection(mongodbUri_Production_NotificationDB);
exports.NotificationDB.once('open', () => console.log('Connected to Notification Database'));
