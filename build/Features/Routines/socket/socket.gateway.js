"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocketConnections = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const socket_server_1 = require("../../../socket.server"); // Adjusted path
const Jwt_helper_1 = require("../../../services/Authentication/helper/Jwt.helper");
const socket_controller_1 = require("./socket.controller"); // Import controller
const handleSocketConnections = (socket) => {
    var _a;
    console.log('New connection attempt to Routine gateway:', socket.id);
    // Middleware for this specific gateway
    try {
        const authHeader = socket.handshake.headers['authorization'];
        if (!authHeader) {
            const errMsg = `Routine Gateway: Auth token missing for socket ${socket.id}.`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'Authentication token missing.',
                error_code: 'AUTH_TOKEN_MISSING'
            });
            socket.disconnect(true);
            return;
        }
        const tokenArray = (_a = authHeader.split(' ')) !== null && _a !== void 0 ? _a : [];
        const token = tokenArray[tokenArray.length - 1];
        if (!token) {
            const errMsg = `Routine Gateway: Auth token format invalid or missing for socket ${socket.id}.`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'Authentication token missing or malformed.',
                error_code: 'AUTH_TOKEN_INVALID_FORMAT'
            });
            socket.disconnect(true);
            return;
        }
        if ((0, Jwt_helper_1.isTokenExpired)(token, process.env.JWT_SECRET_KEY)) {
            const errMsg = `Routine Gateway: Auth token expired for socket ${socket.id}.`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'Authentication token expired.',
                error_code: 'AUTH_TOKEN_EXPIRED'
            });
            socket.disconnect(true);
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        socket.user = decoded;
        socket.userID = decoded.userID; // Assuming userID is in JWT
        socket.routineID = decoded.routineID; // Assuming routineID is in JWT
        if (!socket.userID || !socket.routineID) {
            const errMsg = `Routine Gateway: userID or routineID missing in JWT payload for socket ${socket.id}.`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'UserID or RoutineID missing in token payload.',
                error_code: 'AUTH_PAYLOAD_INCOMPLETE'
            });
            socket.disconnect(true);
            return;
        }
        console.log(`Routine Gateway: User ${socket.userID} authenticated for routine ${socket.routineID} with socket ${socket.id}.`);
        // Room Management
        const roomName = `routine-${socket.routineID}`;
        socket.join(roomName);
        console.log(`Routine Gateway: User ${socket.userID} (Socket ${socket.id}) joined room: ${roomName}`);
        socket_server_1.io.to(roomName).emit('user_joined', { userID: socket.userID, room: roomName, message: `User ${socket.userID} joined the routine.` });
        // Handle Disconnection
        socket.on('disconnect', () => {
            console.log(`Routine Gateway: User ${socket.userID} (Socket ${socket.id}) disconnected from routine ${socket.routineID}.`);
            socket_server_1.io.to(roomName).emit('user_left', { userID: socket.userID, room: roomName, message: `User ${socket.userID} left the routine.` });
        });
        // Example: Listen for routine-specific events
        socket.on('routine_update', (data) => {
            console.log(`Routine Gateway: Message received in room ${roomName} from ${socket.userID}:`, data);
            // Broadcast to others in the room
            socket.to(roomName).emit('routine_updated', Object.assign({ userID: socket.userID }, data));
        });
        // Register summary specific event handlers
        (0, socket_controller_1.registerSummaryHandlers)(socket);
    }
    catch (error) {
        const errMsg = `Routine Gateway: Authentication error for socket ${socket.id}: ${error.message}`;
        console.log(errMsg, error);
        let errorCode = 'AUTH_GENERAL_ERROR';
        if (error.name === 'JsonWebTokenError') {
            errorCode = 'AUTH_JWT_VERIFY_FAILED';
        }
        else if (error.name === 'TokenExpiredError') { // Should be caught by isTokenExpired, but as a fallback
            errorCode = 'AUTH_TOKEN_EXPIRED';
        }
        socket.emit('auth:error', {
            success: false,
            message: `Authentication failed: ${error.message || 'Invalid token.'}`,
            error_code: errorCode
        });
        socket.disconnect(true);
        return;
    }
};
exports.handleSocketConnections = handleSocketConnections;
