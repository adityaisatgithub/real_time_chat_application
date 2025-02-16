import { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

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
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
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
