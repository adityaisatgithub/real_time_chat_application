import { Server } from "socket.io";

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:5173", // Allow frontend
            methods: ["GET", "POST"],
            credentials: true // Allow credentials
        }
    });

    io.on("connection", (socket) => {
        console.log(`🔗 New Client Connected: ${socket.id}`);

        socket.on("send_message", (data) => {
            console.log("📩 Message received:", data);
            io.emit("receive_message", data);
        });

        socket.on("disconnect", () => {
            console.log(`❌ Client Disconnected: ${socket.id}`);
        });
    });

    // Handle private message sending
    io.on("sendMessage", ({ senderId, receiverId, message }) => {
        const receiverSocketId = users[receiverId]; // Get receiver's socket ID
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("receiveMessage", { senderId, message });
        }
    });

    // Handle user disconnection
    io.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        for (const userId in users) {
            if (users[userId] === socket.id) {
                delete users[userId];
            }
        }
    });

    return io;
};

export default initializeSocket;
