import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import jwt, { Secret } from 'jsonwebtoken';
import axios from 'axios'; // Added for proxying

// Import routes
import auth_route from './Features/Account/routes/auth_route';
import routine_route from './Features/Routines/routes/routine_route';
import class_route from './Features/Routines/routes/class_route';
import summary from './Features/Routines/routes/summary_route';
import account from './Features/Account/routes/account_route';
import notice from './Features/Notice_Features/routes/notice_route';
import notification from './Features/Notification_Features/routes/notification.route';

// Initialize the Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = [
  'http://localhost:5000', // Your Flutter web app in development
  // Add your production domain here, e.g., 'https://yourapp.com'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl) or if origin is in allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow methods
  allowedHeaders: ['Authorization', 'x-refresh-token', 'Content-Type'],
  exposedHeaders: ['Authorization', 'x-refresh-token'],
  credentials: true, // If you need to send cookies or auth headers
}));

// Handle pre-flight OPTIONS requests
app.options('*', cors());

// Proxy endpoint for images
app.get('/proxy-image', async (req: Request, res: Response) => {
  const imageUrl = req.query.url as string;
  if (!imageUrl) {
    return res.status(400).json({ message: 'Image URL is required' });
  }

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (error) {
    console.error('Proxy image error:', error);
    res.status(500).json({ message: 'Failed to fetch image' });
  }
});

// Proxy endpoint for PDFs
app.get('/proxy-pdf', async (req: Request, res: Response) => {
  const pdfUrl = req.query.url as string;
  if (!pdfUrl) {
    return res.status(400).json({ message: 'PDF URL is required' });
  }

  try {
    const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'application/pdf');
    res.send(response.data);
  } catch (error) {
    console.error('Proxy PDF error:', error);
    res.status(500).json({ message: 'Failed to fetch PDF' });
  }
});

// Routes
app.use("/auth", auth_route);
app.use("/account", account);
app.use("/routine", routine_route);
app.use("/class", class_route);
app.use("/summary", summary);
app.use("/notice", notice);
app.use("/notification", notification);

// Basic Routes
app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({ message: "hi i am working" });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route Not Found' });
});

// Port
const port = 4000;

// MongoDB connection
import { NoticeDB, maineDB, RoutineDB, NotificationDB } from './prisma/mongodb.connection';
import { isTokenExpired } from './services/Authentication/helper/Jwt.helper';

// Create HTTP server
const server = http.createServer(app);
// Initialize socket.io
const io = new Server(server);

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

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join room', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('leave room', (room) => {
    socket.leave(room);
    console.log(`User left room: ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  socket.on('chat message', (data) => {
    const { message, room } = data;
    console.log(`Message received in room ${room}: ${message}`);
    io.to(room).emit('chat message', {
      socketMessage: 'Message save to db',
      message: "Message received",
      room: 'chat',
    });
  });
});

// Start server after DB connections
Promise.all([maineDB, NoticeDB, RoutineDB, NotificationDB])
  .then(() => {
    server.listen(port, () => {
      console.log("****Server started**** on port " + port);
    });
  })
  .catch((error) => {
    console.error('Error connecting to databases:', error);
  });