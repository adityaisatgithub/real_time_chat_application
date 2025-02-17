// home.jsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import Navbar from '../navbar/Navbar'; // Import Navbar
import Drawer from '../Drawer/Drawer'; // Import Drawer
import Footer from '../footer/Footer'; // Import Footer
import '../footer/Footer.css'; // Correct import path for Footer CSS

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
    fontFamily: 'Arial', // Revert to Arial font
    h1: {
      color: '#36454F', // Charcoal color
    },
    h3: {
      color: '#36454F', // Charcoal color
    },
    h5: {
      color: '#36454F', // Charcoal color
    },
    body1: {
      color: '#36454F', // Charcoal color
    },
  },
});

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMouseEnter = (event) => {
    if (event.clientX <= 10) { // Check if the mouse is at the extreme left
      setDrawerOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #ffffff, #3f51b5)', // Gradient background
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // Change to flex-start to remove gap above navbar
        }}
        onMouseMove={handleMouseEnter}
      >
        <Navbar /> {/* Use Navbar at the top */}
        <Drawer open={drawerOpen} onClose={handleDrawerClose} />
        <Container sx={{ marginTop: '30px' }}> {/* Add margin-top for spacing */}
          <Typography variant="h1" gutterBottom>
            Welcome to the Home Page
          </Typography>
          <Typography variant="body1" paragraph>
            Ready for a chat that&apos;s as private as it is fun? Here, we believe in open conversations and close connections, but we also believe in keeping your secrets, well, secret!
          </Typography>
          <Typography variant="body1" paragraph>
            Every word you type is encrypted end-to-end, so the only people who will ever know what you said are you and the person you&apos;re chatting with. No prying eyes, no spying. Just pure, safe, and totally private conversations. It's your chat — your rules.
          </Typography>
          <Typography variant="body1" paragraph>
            Chat, connect, and enjoy a safe space where privacy is always a priority.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Container>
        <Footer className="footer footer-dark" /> {/* Use Footer at the bottom with dark background */}
      </Box>
    </ThemeProvider>
  );
};

export default Home;