import { Server, Socket } from "socket.io";
import jwt, { Secret } from "jsonwebtoken";
import { isTokenExpired } from "../services/Authentication/helper/Jwt.helper";

// Map to track active user socket associations: Key = userId, Value = Set of socketIds
const onlineUsers = new Map<string, Set<string>>();

// Map to track which rooms each socket has joined: Key = socketId, Value = Set of roomNames
const socketRooms = new Map<string, Set<string>>();

export function initSockets(io: Server) {
  // Socket.io Authentication Middleware
  io.use((socket, next) => {
    try {
      // 1. Check in headers (for mobile clients/platforms supporting custom headers)
      let token: any = socket.handshake.headers["authorization"] || socket.handshake.headers["Authorization"];
      
      // 2. Check in handshake auth object (Socket.io standard web client way)
      if (!token && socket.handshake.auth) {
        token = socket.handshake.auth.token || socket.handshake.auth.Authorization;
      }
      
      // 3. Check in query parameters (fallback for web browser clients)
      if (!token && socket.handshake.query) {
        token = socket.handshake.query.token || socket.handshake.query.auth;
      }

      if (!token) {
        console.error("❌ Token missing in socket connection attempt");
        return next(new Error("❌ Token missing"));
      }

      // If Bearer token format, extract the token string
      if (typeof token === 'string') {
        if (token.startsWith('Bearer ')) {
          token = token.slice(7);
        } else {
          token = token.split(" ").pop() || token;
        }
      }

      if (isTokenExpired(token, process.env.JWT_SECRET_KEY as Secret)) {
        console.error("❌ Token expired in socket connection attempt");
        return next(new Error("❌ Token expired"));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);
      (socket as any).user = decoded;
      next();
    } catch (error) {
      console.error("❌ Token verification failed in socket connection:", error);
      return next(new Error("❌ Token verification failed"));
    }
  });

  io.on("connection", (socket: Socket) => {
    const user = (socket as any).user;
    const userId = user.id;
    const username = user.username || user.name || "User";

    console.log(`🟢 Socket connected: ${username} (${socket.id})`);

    // Track user connection status
    if (!onlineUsers.has(userId)) {
      onlineUsers.set(userId, new Set());
    }
    onlineUsers.get(userId)!.add(socket.id);

    // Join a class/routine room
    socket.on("join room", (room: string) => {
      socket.join(room);
      console.log(`➡️ ${username} joined room: ${room}`);

      if (!socketRooms.has(socket.id)) {
        socketRooms.set(socket.id, new Set());
      }
      socketRooms.get(socket.id)!.add(room);

      // Notify others in the room that this user is online
      socket.to(room).emit("user_online", { userId, username });
    });

    // Leave a class/routine room
    socket.on("leave room", (room: string) => {
      socket.leave(room);
      console.log(`⬅️ ${username} left room: ${room}`);

      const rooms = socketRooms.get(socket.id);
      if (rooms) {
        rooms.delete(room);
      }

      // Notify others in the room that this user is offline
      socket.to(room).emit("user_offline", { userId, username });
    });

    // Typing Indicators
    socket.on("typing", (room: string) => {
      socket.to(room).emit("typing", { userId, username });
    });

    socket.on("stop_typing", (room: string) => {
      socket.to(room).emit("stop_typing", { userId });
    });

    // Chat Message (existing logic extended)
    socket.on("chat message", ({ message, room }) => {
      console.log(`💬 ${room}: ${message}`);
      io.to(room).emit("chat message", {
        message,
        room,
        userId,
        username,
        createdAt: new Date()
      });
    });

    // Disconnect event handling
    socket.on("disconnect", () => {
      console.log(`🔴 Socket disconnected: ${username} (${socket.id})`);

      const sockets = onlineUsers.get(userId);
      if (sockets) {
        sockets.delete(socket.id);
        if (sockets.size === 0) {
          onlineUsers.delete(userId);
        }
      }

      // Notify all rooms this socket was in that they are offline
      const rooms = socketRooms.get(socket.id);
      if (rooms) {
        rooms.forEach((room) => {
          socket.to(room).emit("user_offline", { userId, username });
        });
        socketRooms.delete(socket.id);
      }
    });
  });
}
