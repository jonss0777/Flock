'use client';

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
import SettingsIcon from '@mui/icons-material/Settings';

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

    const handleHomeClick = () => {
        // Navigate to the homepage
        window.location.href = '/';
    };

    const list = () => (
        <Box
            sx={{ width: 250, height: '100%', backgroundColor: '#E0F7FA' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            display="flex"
            flexDirection="column"
        >
            <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={username} src="./static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={username}
                            secondary={
                                <Typography variant="body2" color="text.secondary" align="center">
                                    Affiliation: {collegeName}
                                </Typography>
                            }
                            sx={{ textAlign: 'center' }}
                        />
                    </ListItem>
                </List>

                {/* Contribution Points Box */}
                <Box
                    sx={{
                        marginTop: 2,
                        padding: 1,
                        textAlign: 'center',
                        width: '80%'
                    }}
                >
                    <Typography variant="body2" color="text.primary">
                        Contribution Points: 0
                    </Typography>
                </Box>

                {/* Project List Button */}
                <ListItem
                    button
                    onClick={handleProjectListClick}
                    sx={{ userSelect: 'none' }} // Prevent text selection
                >
                    <ListItemText
                        primary={
                            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'black' }}>
                                Project List
                            </Typography>
                        }
                    />
                </ListItem>

                {/* Messages Button */}
                <ListItem
                    button
                    onClick={handleMessagesClick}
                    sx={{ userSelect: 'none' }} // Prevent text selection
                >
                    <ListItemText
                        primary={
                            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'black' }}>
                                Messages
                            </Typography>
                        }
                    />
                </ListItem>
            </Box>

            {/* Settings Button at the bottom */}
            <Box sx={{ marginTop: 'auto' }}>
                <ListItem button>
                    <ListItemAvatar>
                        <SettingsIcon sx={{ color: 'black' }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Settings"
                        sx={{ textAlign: 'left', marginLeft: -3, color: 'black', userSelect: 'none' }} // Prevent text selection
                    />
                </ListItem>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    {/* Add your logo image */}
                    <ListItemAvatar>
                        <Avatar alt={username} src="./logo.png" sx={{ width: 56, height: 56, marginTop: '10px' }} />
                    </ListItemAvatar>

                    {/* Second image as a button to navigate to the homepage */}
                    <IconButton
                        onClick={handleHomeClick}
                        disableRipple
                        sx={{
                            marginLeft: '30px',
                            marginTop: '5px',
                            padding: 0, // Remove padding
                            borderRadius: 0, // Keep corners sharp
                            width: 'auto', // Let the width adjust automatically
                            height: 'auto', // Let the height adjust automatically
                            '&:focus': {
                                outline: 'none', // Remove the focus outline
                                boxShadow: 'none' // Remove any box shadow if present
                            }
                        }}
                    >
                        <img
                            src="./FLOC.png"
                            alt="Second Image"
                            style={{
                                width: 70,
                                height: 40,
                                marginTop: '10px'
                            }}
                        />
                    </IconButton>

                    {/* Add the menu button on the right */}
                    {auth && (
                        <Box sx={{ marginLeft: 'auto' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="black"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
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
