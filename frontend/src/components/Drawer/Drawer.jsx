import React, { useState } from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Divider, Button, Collapse, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Drawer = ({ open, onClose }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  const handleNavigationClick = () => {
    setNavigationOpen(!navigationOpen);
  };

  return (
    <MUIDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary" // Change to temporary to allow closing on outside click
      sx={{
        '& .MuiDrawer-paper': {
          width: '250px',
          boxSizing: 'border-box',
          background: 'linear-gradient(to bottom, #3f51b5, #ffffff)', // Reverse gradient background
        },
      }}
    >
      <List sx={{ marginTop: '20px' }}> {/* Increase margin-top for more spacing */}
        <ListItem button onClick={handleProfileClick}>
          <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>Profile/Account Info</Typography>} />
          {profileOpen ? <ExpandLess sx={{ color: '#F0EAD6' }} /> : <ExpandMore sx={{ color: '#F0EAD6' }} />}
        </ListItem>
        <Collapse in={profileOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>User Profile</Typography>} />
            </ListItem>
            <ListItem>
              <Button variant="contained" color="primary">
                Logout
              </Button>
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>Account Settings</Typography>} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleNavigationClick}>
          <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>Navigation</Typography>} />
          {navigationOpen ? <ExpandLess sx={{ color: '#F0EAD6' }} /> : <ExpandMore sx={{ color: '#F0EAD6' }} />}
        </ListItem>
        <Collapse in={navigationOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>Home</Typography>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>Dashboard</Typography>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Typography sx={{ color: '#F0EAD6' }}>Notifications</Typography>} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
