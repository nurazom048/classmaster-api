import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

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

export const maineDB = mongoose.createConnection(mongodbUriMain, {
    autoIndex: true,
});

maineDB.once("open", () => {
    console.log("✅ Connected to Main MongoDB Database");
});

maineDB.on("error", (err) => {
    console.error("❌ Main DB connection error:", err);
});


// ==============================
// Notification Database Connection
// ==============================

export const NotificationDB = mongoose.createConnection(mongodbUriNotification, {
    autoIndex: true,
});

NotificationDB.once("open", () => {
    console.log("✅ Connected to Notification MongoDB Database");
});

NotificationDB.on("error", (err) => {
    console.error("❌ Notification DB connection error:", err);
});