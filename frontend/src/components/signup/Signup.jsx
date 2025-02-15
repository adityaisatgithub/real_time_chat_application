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

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5001/api/signup/", user);
      localStorage.setItem("token", res.data.token);
      navigate("/login"); // Redirect to Login Page
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  required
                  value={user.name}
                  onChange={handleChange}
                />
              </Grid>
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
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;
