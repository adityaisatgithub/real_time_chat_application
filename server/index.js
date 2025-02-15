import 'dotenv/config';
import './generateSecret.js';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import realTimeChatsRouter from './routes/realTimeChats.js';

// Connect to the database
connectDB();

const app = express();

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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


