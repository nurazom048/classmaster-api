"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDB = exports.maineDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Environment variables
const mongodbUriMain = process.env.MONGODB_URI_MAIN_DB;
const mongodbUriNotification = process.env.MONGODB_URI_NOTIFICATION_DB;
// ==============================
// Safety Checks (Production)
// ==============================
if (!mongodbUriMain) {
    throw new Error("❌ MONGODB_URI_MAIN_DB not found in .env file");
}
if (!mongodbUriNotification) {
    throw new Error("❌ MONGODB_URI_NOTIFICATION_DB not found in .env file");
}
// ==============================
// Main Database Connection
// ==============================
exports.maineDB = mongoose_1.default.createConnection(mongodbUriMain, {
    autoIndex: true,
});
exports.maineDB.once("open", () => {
    console.log("✅ Connected to Main MongoDB Database");
});
exports.maineDB.on("error", (err) => {
    console.error("❌ Main DB connection error:", err);
});
// ==============================
// Notification Database Connection
// ==============================
exports.NotificationDB = mongoose_1.default.createConnection(mongodbUriNotification, {
    autoIndex: true,
});
exports.NotificationDB.once("open", () => {
    console.log("✅ Connected to Notification MongoDB Database");
});
exports.NotificationDB.on("error", (err) => {
    console.error("❌ Notification DB connection error:", err);
});
