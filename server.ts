// ==========================================
// 🔧 NODE.JS v26+ POLYFILLS (Must run first)
// ==========================================
import { Buffer } from "buffer";
const bufferModule = require("buffer");
if (!bufferModule.SlowBuffer) {
  bufferModule.SlowBuffer = Buffer;
}

// ===============================
// 📦 IMPORTS
// ===============================
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import jwt, { Secret } from "jsonwebtoken";

// Routes
import auth_route from "./Features/Account/routes/auth_route";
import routine_route from "./Features/Routines/routes/routine_router";
import routine_member_route from "./Features/Routines/routes/routine_member.route";
import summary from "./Features/Routine_summary/routes/summary_route";
import account from "./Features/Account/routes/account_route";
import notice from "./Features/Notice_Features/routes/notice_route";
import notification from "./Features/Notification_Features/routes/notification.route";
import { classNotification } from "./Features/Routines/controllers/routine.controllers";
import { verifyToken } from "./services/Authentication/helper/Authentication";

// DB Connections
import { connectPostgres } from "./prisma/schema/prisma.clint";

// Helpers
import { isTokenExpired } from "./services/Authentication/helper/Jwt.helper";

// s3 imports
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { startBackupScheduler } from "./services/backup/backup.service";
import { autoSeedInitialize } from "./services/auto task/seed.notice";
import { startPolytechnicNoticeFetcher } from "./services/auto task/politechnic_notice/polytechnic.notice";
import { startSummaryCleanerCron } from "./services/cron/summary_cleaner.cron";
import { connectMinIO } from "./services/storage/config/minio.storage";
import { connectR2 } from "./services/storage/config/cloudflare.r2.storage";
import { connectAppwrite } from "./services/storage/config/appwrite.storage";
import { storage, getFile, BUCKET_NAME } from "./services/storage/storage";
import { StorageProvider } from "./utils/enums";


// ===============================
// 🚀 APP INITIALIZATION
// ===============================
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;




// ===============================
// 🧩 MIDDLEWARE
// ===============================

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Config
const allowedOrigins = [
  "http://localhost:5000",
  "http://localhost:5001",
  "http://localhost:4000",
  "https://classmaster.top",
  "https://www.classmaster.top",
  "https://api.classmaster.top",
  "https://c.api.classmaster.top",
];

app.use(
  cors({
    credentials: true,
    origin: true,
    // origin: (origin, callback) => {
    //   if (!origin || allowedOrigins.includes(origin)) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error("❌ Not allowed by CORS"));
    //   }
    // },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Authorization", "x-refresh-token", "Content-Type", "X-Guest", "X-App-Client"],
    exposedHeaders: ['Authorization', 'x-refresh-token'],
  })
);

app.options("*", cors());


// Attach Socket.io instance to Express request
app.use((req: any, res, next) => {
  req.io = io;
  next();
});

// ===============================
// 📌 ROUTES
// ===============================
app.use("/auth", auth_route);
app.use("/account", account);
app.use("/routine", routine_route);
app.use("/routine", routine_member_route);
app.use("/summary", summary);
app.use("/notice", notice);
app.use("/notification", notification);
app.post("/class/notification", verifyToken, classNotification);

// storage route
app.get('/storage/:bucket/:key(*)', async (req: Request, res: Response) => {
  try {
    const bucket = req.params.bucket as string;
    const key = req.params.key as string;

    let fileData;
    try {
      fileData = await getFile(bucket, key);
    } catch (error) {
      if (bucket !== BUCKET_NAME) {
        console.warn(`⚠️ Bucket mismatch or failed: ${bucket}. Retrying getFile with configured BUCKET_NAME: ${BUCKET_NAME}`);
        fileData = await getFile(BUCKET_NAME, key);
      } else {
        throw error;
      }
    }

    res.setHeader('Content-Type', fileData.contentType);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Disposition', 'inline');

    if (Buffer.isBuffer(fileData.body)) {
      res.send(fileData.body);
    } else if (fileData.body && typeof fileData.body.pipe === "function") {
      fileData.body.pipe(res);
    } else {
      res.status(404).json({ message: "File content is empty" });
    }
  } catch (error) {
    console.error("❌ Storage File Error:", error);
    res.status(404).json({ message: "File not found or access denied" });
  }
});
// Base Checkers
app.get("/", (req, res) => res.status(200).json({ status: "online", message: "✅ ClassMaster API is Now online ready" }));
app.use((req, res) => res.status(404).json({ message: "❌ 404: Route Not Found" }));

// ===============================
// 🔌 SOCKET.IO INITIALIZATION
// ===============================
import { initSockets } from "./sockets/summary_socket";
initSockets(io);


// ===============================
// Start Server After All DB Connections
// ===============================
const startServer = async () => {
  try {


    // PostgreSQL
    await connectPostgres();
    console.log("✅ PostgreSQL Connected");

    // Storage client initialization check
    if (storage === StorageProvider.R2) {
      await connectR2();
    } else if (storage === StorageProvider.APPWRITE) {
      await connectAppwrite();
    } else {
      await connectMinIO();
    }

    // Start Backup Scheduler
    startBackupScheduler();
    // Start Summary Cleaner Cron
    startSummaryCleanerCron();
    // Fire and forget: Kick off the background loops
    autoSeedInitialize();
    startPolytechnicNoticeFetcher();

    // Start Server
    server.listen(PORT, () => {
      const baseURL = `http://localhost:${PORT}`;
      console.log(`🚀 Server now running on port ${PORT}`);
      console.log(`🌐 URL: ${baseURL}`);

      // Auto-start Cloudflare Tunnel in Production
      if (process.env.NODE_ENV === 'production') {
        console.log('Starting Cloudflare Tunnel for Production...');
        const { exec } = require('child_process');
        const fs = require('fs');
        const path = require('path');
        const localCloudflared = path.join(process.cwd(), 'cloudflared');
        const bin = fs.existsSync(localCloudflared) ? './cloudflared' : 'cloudflared';
        const tunnelProcess = exec(`${bin} tunnel --config .cloudflared/config.prod.yml run`);

        tunnelProcess.stdout?.on('data', (data: string) => console.log(`[Tunnel Info] ${data}`));
        tunnelProcess.stderr?.on('data', (data: string) => console.error(`[Tunnel Error] ${data}`));
      }
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Run server
startServer();