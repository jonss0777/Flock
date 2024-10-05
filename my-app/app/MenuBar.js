'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings'; // Import SettingsIcon

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const username = "Aidar"; // Replace this with your dynamic username if needed
    const collegeName = "College Name"; // Replace this with the actual college name

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleProjectListClick = () => {
        console.log('Clicked on Project List');
    };

    const handleMessagesClick = () => {
        console.log('Clicked on Messages');
    };

    const list = () => (
        <Box
            sx={{ width: 250, height: '100%' }} // Set height to 100% for the drawer
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            display="flex"
            flexDirection="column"
        >
            <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}> {/* Center align the top content */}
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={username} src="/static/images/avatar/1.jpg" /> {/* Replace with your avatar URL */}
                        </ListItemAvatar>
                        <ListItemText
                            primary={username}
                            secondary={
                                <Typography variant="body2" color="text.secondary" align="center">
                                    Affiliation: {collegeName}
                                </Typography>
                            }
                            sx={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }} // Custom font size and styles
                        />
                    </ListItem>
                </List>

                {/* Contribution Points Box */}
                <Box
                    sx={{
                        marginTop: 2, // Space above the box
                        padding: 1, // Padding inside the box
                        textAlign: 'center', // Center text alignment
                        width: '80%' // Width of the box
                    }}
                >
                    <Typography variant="body2" color="text.primary" sx={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
                        Contribution Points: 0
                    </Typography>
                </Box>

                {/* Project List Button */}
                <ListItem button onClick={handleProjectListClick}>
                    <ListItemText
                        primary="Project List"
                        sx={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Arial, sans-serif' }} // Custom font size and styles
                    />
                </ListItem>

                {/* Messages Button */}
                <ListItem button onClick={handleMessagesClick}>
                    <ListItemText
                        primary="Messages"
                        sx={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Arial, sans-serif' }} // Custom font size and styles
                    />
                </ListItem>
            </Box>

            {/* Settings Button at the bottom */}
            <Box sx={{ marginTop: 'auto' }}> {/* This box ensures the settings button is at the bottom */}
                <ListItem button>
                    <ListItemAvatar>
                        <SettingsIcon /> {/* Settings icon */}
                    </ListItemAvatar>
                    <ListItemText
                        primary="Settings"
                        sx={{ textAlign: 'left', marginLeft: -3, fontSize: '18px', fontFamily: 'Arial, sans-serif' }} // Custom font size and styles
                    />
                </ListItem>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Photos
                    </Typography>
                    {auth && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer on the right */}
            <Drawer
                anchor="right" // Move the drawer to the right side
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}
