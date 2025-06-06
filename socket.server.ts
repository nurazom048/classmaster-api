import { Server, Socket } from 'socket.io';
import http from 'http';
import jwt, { Secret } from 'jsonwebtoken';
import { isTokenExpired } from './services/Authentication/helper/Jwt.helper';

let io: Server;

export const initSocketServer = (server: http.Server) => {
  io = new Server(server);

  // Middleware to authenticate socket connection
  io.use((socket, next) => {
    try {
      console.log('Socket handshake headers:', socket.handshake.headers);
      const authHeader = socket.handshake.headers['authorization'];

      if (!authHeader) {
        console.log('Authorization token missing.');
        return next(new Error('Authentication error: Token missing.'));
      }

      const tokenArray = authHeader.split(' ') ?? [];
      const token = tokenArray[tokenArray.length - 1];

      if (!token) {
        console.log('Authorization token missing.');
        return next(new Error('Authentication error: Token missing.'));
      }

      const isAuthTokenExpired = isTokenExpired(token, process.env.JWT_SECRET_KEY as Secret);
      if (isAuthTokenExpired) {
        console.log('Authorization token has expired.');
        return next(new Error('Authentication error: Token expired.'));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);
      console.log('Authenticated user:', decoded);
      (socket as any).user = decoded;

      return next();
    } catch (error) {
      console.log('Error during token validation:', error);
      return next(new Error('Authentication error: Token verification failed.'));
    }
  });

  // Delegate connection handling to specific gateways
  // The global io.use() middleware for authentication runs before this for all connections
  io.on('connection', (socket: Socket) => {
    // You could inspect socket.handshake.query or other headers here
    // to route to different gateways if you had more than one.
    // For now, we directly use the Routine gateway.
    console.log(`User ${socket.id} connected, passing to Routine gateway.`);
    handleSocketConnections(socket);
  });

  return io;
};

// Import gateways
import { handleSocketConnections } from './Features/Routines/socket/socket.gateway';

export { io };
