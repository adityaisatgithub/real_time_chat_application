import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../navbar/Navbar"; // Import Navbar
import socket from "./socket"; // Import the socket instance

const Chat = () => {
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    userId: null,
  };
  const [receiverId, setReceiverId] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (user.userId && receiverId && message) {
      // Send message to the server
      socket.emit("send_message", {
        senderId: user.userId,
        receiverId,
        message,
      });

      setChat([...chat, { sender: "You", message }]); // Add to local chat
      setMessage(""); // Clear input
    }
  };

  return (
    <Container maxWidth="md">
      <Navbar />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Chat
        </Typography>
        <Paper sx={{ p: 2, mb: 2 }}>
          <TextField
            fullWidth
            label="Receiver ID"
            variant="outlined"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Send
          </Button>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Chat History
          </Typography>
          <List>
            {chat.map((msg, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${msg.sender}: ${msg.message}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Chat;
