import { io } from "socket.io-client";

const socket = io("http://localhost:5001", {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});

socket.on("connect", () => {
    console.log(`✅ Connected to server: ${socket.id}`);
});

socket.on("disconnect", () => {
    console.log(`❌ Disconnected from server`);
});

socket.on("receive_message", (data) => {
    console.log("📩 Message received:", data);
});

export default socket;
