import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5001/api/login", user);
      localStorage.setItem("token", res.data.token);
      navigate("/"); // Redirect to Home Page
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  required
                  value={user.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  required
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
