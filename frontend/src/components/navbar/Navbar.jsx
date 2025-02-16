import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/chat">
            Chat
          </Button>
        </Box>
        <Typography variant="h6">Hello, {user.name}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
