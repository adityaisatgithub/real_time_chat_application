import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../navbar/Navbar"; // Import Navbar
import socket from "./socket"; // Import the socket instance

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <Navbar user={user} />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Chat Room
        </Typography>
        <Paper sx={{ p: 2, mb: 2, maxHeight: 400, overflow: "auto" }}>
          <List>
            {messages.map((msg, index) => (
              <ListItem key={index}>
                <ListItemText primary={msg} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            label="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Send
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Chat;
