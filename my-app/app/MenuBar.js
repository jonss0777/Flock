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
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon

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
            sx={{ width: 250, height: '100%', backgroundColor: '#E0F7FA' }} // Set the background color to light blue
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
                            sx={{ textAlign: 'center' }} // Center text alignment for username
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
                    <Typography variant="body2" color="text.primary">
                        Contribution Points: 0
                    </Typography>
                </Box>

                {/* Project List Button */}
                <ListItem button onClick={handleProjectListClick}>
                    <IconButton size="small" sx={{ marginRight: 1 }}> {/* X icon on the left side */}
                        <CloseIcon />
                    </IconButton>
                    <ListItemText
                        primary={
                            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'black' }}> {/* Change text color to black */}
                                Project List
                            </Typography>
                        }
                    />
                </ListItem>

                {/* Messages Button */}
                <ListItem button onClick={handleMessagesClick}>
                    <IconButton size="small" sx={{ marginRight: 1 }}> {/* X icon on the left side */}
                        <CloseIcon />
                    </IconButton>
                    <ListItemText
                        primary={
                            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'black' }}> {/* Change text color to black */}
                                Messages
                            </Typography>
                        }
                    />
                </ListItem>
            </Box>

            {/* Settings Button at the bottom */}
            <Box sx={{ marginTop: 'auto' }}> {/* This box ensures the settings button is at the bottom */}
                <ListItem button>
                    <ListItemAvatar>
                        <SettingsIcon sx={{ color: 'black' }} /> {/* Change settings icon color to black */}
                    </ListItemAvatar>
                    <ListItemText
                        primary="Settings"
                        sx={{ textAlign: 'left', marginLeft: -3, color: 'black' }} // Change settings text color to black
                    />
                </ListItem>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}> {/* Set AppBar background color to white */}
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        image
                    </Typography>
                    {auth && (
                        <IconButton
                            size="large"
                            edge="end"
                            color="black"
                            aria-label="menu"
                            sx={{ ml: 2 }} // Adjust margin left for spacing
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer on the right */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}
