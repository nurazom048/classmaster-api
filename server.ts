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

// s3 imports
import { startBackupScheduler } from "./services/backup/backup.service";
import { autoSeedInitialize } from "./services/auto task/seed.notice";
import { startPolytechnicNoticeFetcher } from "./services/auto task/politechnic_notice/polytechnic.notice";
import { startSummaryCleanerCron } from "./services/cron/summary_cleaner.cron";
import { connectMinIO } from "./services/storage/config/minio.storage";
import { connectR2 } from "./services/storage/config/cloudflare.r2.storage";
import { connectAppwrite } from "./services/storage/config/appwrite.storage";
import { autoDeleteCacheCron } from "./services/storage/config/cache.appwrite";
import { storage } from "./services/storage/storage";
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
  "http://localhost:3000",
  "http://localhost:8080",
  "http://localhost:8000",
  "https://classmaster.top",
  "https://www.classmaster.top",
  "https://api.classmaster.top",
  "https://c.api.classmaster.top",
  "https://dev.classmaster.top",
  "https://dev.api.classmaster.top",
];

const corsOptions: cors.CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // 1. Allow non-browser requests (Native Flutter Android/iOS, Mobile Apps, Postman, server calls)
    if (!origin) {
      return callback(null, true);
    }
    // 2. Allow whitelisted production and staging domains
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // 3. Allow local Flutter Web debug instances (dynamic localhost ports & local IPs)
    if (
      origin.startsWith("http://localhost:") ||
      origin.startsWith("http://127.0.0.1:") ||
      origin.startsWith("http://192.168.") ||
      origin.startsWith("http://10.0.2.2:")
    ) {
      return callback(null, true);
    }
    // 4. Block unauthorized web scrapers
    callback(new Error("❌ Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Authorization", "x-refresh-token", "Content-Type", "X-Guest", "X-App-Client"],
  exposedHeaders: ['Authorization', 'x-refresh-token'],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));


// Attach Socket.io instance to Express request
app.use((req: any, res, next) => {
  req.io = io;
  next();
});

import storage_route from "./services/storage/storage.route";

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
app.use("/storage", storage_route);
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
    // Start Appwrite 30-Day Cache Cleaner Cron
    autoDeleteCacheCron();
    // Fire and forget: Kick off the background loops
    autoSeedInitialize();
    startPolytechnicNoticeFetcher();

    // Start Server
    server.listen(PORT, () => {
      const baseURL = `http://localhost:${PORT}`;
      console.log(`🚀 Server now running on port ${PORT}`);
      console.log(`🌐 URL: ${baseURL}`);

      // Auto-start Cloudflare Tunnel in Production (Handled via Docker Compose service)
      // if (process.env.NODE_ENV === 'production') {
      //   console.log('Starting Cloudflare Tunnel for Production...');
      //   const { exec } = require('child_process');
      //   const fs = require('fs');
      //   const path = require('path');
      //   const localCloudflared = path.join(process.cwd(), 'cloudflared');
      //   const bin = fs.existsSync(localCloudflared) ? './cloudflared' : 'cloudflared';
      //   const tunnelProcess = exec(`${bin} tunnel --config .cloudflared/config.prod.yml run`);
      // 
      //   tunnelProcess.stdout?.on('data', (data: string) => console.log(`[Tunnel Info] ${data}`));
      //   tunnelProcess.stderr?.on('data', (data: string) => console.error(`[Tunnel Error] ${data}`));
      // }
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Run server
startServer();