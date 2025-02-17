import { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import appIcon from '../../assets/appIcon.png'; // Import the PNG image

const Navbar = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserName("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="app icon">
            <img src={appIcon} alt="App Icon" style={{ width: 29, height: 29 }} /> {/* Use the PNG image */}
          </IconButton>
          <Button color="inherit" component={Link} to="/home">
            Chit Chat
          </Button>
        </Box>
        {userName ? (
          <>
            <Typography variant="h7">Hello, {userName}</Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
