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
import routine_route from "./Features/Routines/routes/routine_route";
import class_route from "./Features/Routines/routes/class_route";
import summary from "./Features/Routines/routes/summary_route";
import account from "./Features/Account/routes/account_route";
import notice from "./Features/Notice_Features/routes/notice_route";
import notification from "./Features/Notification_Features/routes/notification.route";

// DB Connections
import { maineDB, NotificationDB } from "./prisma/mongodb.connection"; // ❌ MongoDB commented out
import { connectPostgres } from "./prisma/schema/prisma.clint";
import { connectMinIO } from "./services/storage/storage.mino.s3";

// Helpers
import { isTokenExpired } from "./services/Authentication/helper/Jwt.helper";

// s3 imports
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./config/firebase/s3.config"; // Path-ti tomar file structure onujayi thik kore nio
import { startBackupScheduler } from "./services/backup/backup.service";

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
  "http://localhost:4000",
  "https://classmaster.top",
  "https://www.classmaster.top",
  "https://api.classmaster.top",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "x-refresh-token", "Content-Type", "X-Guest", "X-App-Client"],
    exposedHeaders: ['Authorization', 'x-refresh-token'],
    credentials: true,
  })
);

app.options("*", cors());





// ===============================
// 📌 ROUTES
// ===============================
app.use("/auth", auth_route);
app.use("/account", account);
app.use("/routine", routine_route);
app.use("/class", class_route);
app.use("/summary", summary);
app.use("/notice", notice);
app.use("/notification", notification);

// s3 route
app.get('/storage/:bucket/:key(*)', async (req: Request, res: Response) => {
  try {
    const bucket = req.params.bucket as string;
    const key = req.params.key as string;

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    const response = await s3Client.send(command);

    // 🔴 সংশোধন: Content-Type কমেন্ট করা যাবে না, এটি লাগবেই!
    res.setHeader('Content-Type', response.ContentType || 'application/pdf');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Disposition', 'inline');

    if (response.Body) {
      (response.Body as any).pipe(res);
    } else {
      res.status(404).json({ message: "File content is empty" });
    }
  } catch (error) {
    console.error("❌ MinIO File Error:", error);
    res.status(404).json({ message: "File not found or access denied" });
  }
});
// Base Checkers
app.get("/", (req, res) => res.status(200).json({ status: "online", message: "✅ ClassMaster API is Now online ready" }));
app.use((req, res) => res.status(404).json({ message: "❌ 404: Route Not Found" }));

// ===============================
// 🔌 SOCKET.IO AUTH MIDDLEWARE
// ===============================
io.use((socket, next) => {
  try {
    const authHeader = socket.handshake.headers["authorization"];

    if (!authHeader) {
      return next(new Error("❌ Token missing"));
    }

    const token = authHeader.split(" ").pop();

    if (!token) {
      return next(new Error("❌ Token missing"));
    }

    // Check expiry
    if (isTokenExpired(token, process.env.JWT_SECRET_KEY as Secret)) {
      return next(new Error("❌ Token expired"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);
    (socket as any).user = decoded;

    next();
  } catch (error) {
    return next(new Error("❌ Token verification failed"));
  }
});


// ===============================
// 🔗 SOCKET EVENTS
// ===============================
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("join room", (room) => {
    socket.join(room);
    console.log(`➡️ Joined room: ${room}`);
  });

  socket.on("leave room", (room) => {
    socket.leave(room);
    console.log(`⬅️ Left room: ${room}`);
  });

  socket.on("chat message", ({ message, room }) => {
    console.log(`💬 ${room}: ${message}`);

    io.to(room).emit("chat message", {
      message: "Message received",
      room,
    });
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

// ===============================
// Start Server After All DB Connections
// ===============================
const startServer = async () => {
  try {
    // MongoDB
    // await Promise.all([
    //   maineDB.asPromise(),
    //   NotificationDB.asPromise(),
    // ]);
    // console.log("✅ MongoDB Connected");

    // PostgreSQL
    await connectPostgres();
    console.log("✅ PostgreSQL Connected");

    // MinIO
    await connectMinIO();
    console.log("✅ MinIO Connected");

    // Start Backup Scheduler
    startBackupScheduler();

    // Start Server
    server.listen(PORT, () => {
      const baseURL = `http://localhost:${PORT}`;
      console.log(`🚀 Server now running on port ${PORT}`);
      console.log(`🌐 URL: ${baseURL}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Run server
startServer();