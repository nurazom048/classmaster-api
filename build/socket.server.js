"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.initSocketServer = void 0;
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Jwt_helper_1 = require("./services/Authentication/helper/Jwt.helper");
let io;
const initSocketServer = (server) => {
    exports.io = io = new socket_io_1.Server(server);
    // Middleware to authenticate socket connection
    io.use((socket, next) => {
        var _a;
        try {
            console.log('Socket handshake headers:', socket.handshake.headers);
            const authHeader = socket.handshake.headers['authorization'];
            if (!authHeader) {
                console.log('Authorization token missing.');
                return next(new Error('Authentication error: Token missing.'));
            }
            const tokenArray = (_a = authHeader.split(' ')) !== null && _a !== void 0 ? _a : [];
            const token = tokenArray[tokenArray.length - 1];
            if (!token) {
                console.log('Authorization token missing.');
                return next(new Error('Authentication error: Token missing.'));
            }
            const isAuthTokenExpired = (0, Jwt_helper_1.isTokenExpired)(token, process.env.JWT_SECRET_KEY);
            if (isAuthTokenExpired) {
                console.log('Authorization token has expired.');
                return next(new Error('Authentication error: Token expired.'));
            }
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
            console.log('Authenticated user:', decoded);
            socket.user = decoded;
            return next();
        }
        catch (error) {
            console.log('Error during token validation:', error);
            return next(new Error('Authentication error: Token verification failed.'));
        }
    });
    // Delegate connection handling to specific gateways
    // The global io.use() middleware for authentication runs before this for all connections
    io.on('connection', (socket) => {
        // You could inspect socket.handshake.query or other headers here
        // to route to different gateways if you had more than one.
        // For now, we directly use the Routine gateway.
        console.log(`User ${socket.id} connected, passing to Routine gateway.`);
        (0, socket_gateway_1.handleSocketConnections)(socket);
    });
    return io;
};
exports.initSocketServer = initSocketServer;
// Import gateways
const socket_gateway_1 = require("./Features/Routines/socket/socket.gateway");
