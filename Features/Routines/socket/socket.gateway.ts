import { Socket } from 'socket.io';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { io } from '../../../socket.server'; // Adjusted path
import { isTokenExpired } from '../../../services/Authentication/helper/Jwt.helper';
import { registerSummaryHandlers } from './socket.controller'; // Import controller

// Define and export AuthenticatedSocket
export interface AuthenticatedSocket extends Socket {
    user?: string | JwtPayload; // The decoded JWT payload
    userID?: string; // Extracted userID from JWT

}

export const handleSocketConnections = (socket: AuthenticatedSocket) => {
    console.log('New connection attempt to Routine gateway:', socket.id);

    try {
        // Authorization check
        const authHeader = socket.handshake.headers['authorization'];
        if (!authHeader) {
            const errMsg = `Auth token missing for socket ${socket.id}`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'Authentication token missing',
                error_code: 'AUTH_TOKEN_MISSING'
            });
            socket.disconnect(true);
            return;
        }

        // Token extraction
        const tokenArray = authHeader.split(' ') ?? [];
        const token = tokenArray[tokenArray.length - 1];
        if (!token) {
            const errMsg = `Auth token format invalid for socket ${socket.id}`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'Authentication token malformed',
                error_code: 'AUTH_TOKEN_INVALID_FORMAT'
            });
            socket.disconnect(true);
            return;
        }

        // Token expiration check
        if (isTokenExpired(token, process.env.JWT_SECRET_KEY as Secret)) {
            const errMsg = `Auth token expired for socket ${socket.id}`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'Authentication token expired',
                error_code: 'AUTH_TOKEN_EXPIRED'
            });
            socket.disconnect(true);
            return;
        }

        // Token verification
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret) as JwtPayload;
        socket.user = decoded;

        // FIX 1: Accept either 'userID' or 'id' from JWT
        socket.userID = decoded.userID || decoded.id;

        if (!socket.userID) {
            const errMsg = `UserID missing in JWT payload for socket ${socket.id}`;
            console.log(errMsg);
            socket.emit('auth:error', {
                success: false,
                message: 'UserID missing in token',
                error_code: 'AUTH_PAYLOAD_INCOMPLETE'
            });
            socket.disconnect(true);
            return;
        }

        console.log(`User ${socket.userID} authenticated with socket ${socket.id}`);

        // FIX 2: Simplified room management with common room
        const roomName = 'common-room';
        socket.join(roomName);
        console.log(`User ${socket.userID} joined common room`);

        io.to(roomName).emit('user_joined', {
            userID: socket.userID,
            room: roomName,
            message: `User ${socket.userID} joined`
        });

        // Disconnect handler
        socket.on('disconnect', () => {
            console.log(`User ${socket.userID} disconnected`);
            io.to(roomName).emit('user_left', {
                userID: socket.userID,
                room: roomName,
                message: `User ${socket.userID} left`
            });
        });

        // Message handler
        socket.on('routine_update', (data) => {
            console.log(`Message from ${socket.userID} in ${roomName}:`, data);
            socket.to(roomName).emit('routine_updated', {
                userID: socket.userID,
                ...data
            });
        });

        registerSummaryHandlers(socket);

    } catch (error: any) {
        console.log(`Authentication error for socket ${socket.id}:`, error);
        let errorCode = 'AUTH_GENERAL_ERROR';

        if (error.name === 'JsonWebTokenError') {
            errorCode = 'AUTH_JWT_VERIFY_FAILED';
        } else if (error.name === 'TokenExpiredError') {
            errorCode = 'AUTH_TOKEN_EXPIRED';
        }

        socket.emit('auth:error', {
            success: false,
            message: `Authentication failed: ${error.message || 'Invalid token'}`,
            error_code: errorCode
        });
        socket.disconnect(true);
    }
};