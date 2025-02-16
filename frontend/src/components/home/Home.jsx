// home.jsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';
import './Home.css';
import Navbar from '../navbar/Navbar'; // Import Navbar

// Create a theme with the same color as the navbar
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Replace with your navbar color
    },
    background: {
      default: '#f5f5f5', // Change background color to off-white
    },
  },
  typography: {
    h1: {
      color: '#000', // Change text color to black
    },
    body1: {
      color: '#000', // Change text color to black
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // Change to flex-start to remove gap above navbar
        }}
      >
        <Navbar /> {/* Use Navbar at the top */}
        <Container>
          <Typography variant="h1" gutterBottom>
            Welcome to the Home Page
          </Typography>
          <Typography variant="body1" paragraph>
            This is an enhanced home page using Material-UI.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;