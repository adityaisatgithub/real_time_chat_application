import 'dotenv/config';
import './generateSecret.js';
import express from 'express';
import cors from 'cors';
import http from "http";
import connectDB from './config/db.js';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import realTimeChatsRouter from './routes/realTimeChats.js';
import initializeSocket from './socket/index.js'; // Import socket.io initialization

// Connect to the database
connectDB();

const app = express();

const server = http.createServer(app); // Create HTTP Server
initializeSocket(server); // Initialize socket.io

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from frontend
    credentials: true,  // Allow cookies & auth headers
}));
app.use(express.json());

// Define Routes
app.use('/api', loginRouter);
app.use('/api', signupRouter);
app.use('/api/chats', realTimeChatsRouter);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Use server.listen instead of app.listen


