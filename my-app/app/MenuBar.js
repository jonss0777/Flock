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
import axios from 'axios'; // Import axios to fetch data

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [userData, setUserData] = React.useState(null); // Start as null

    React.useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/67027c81ee86cd3de307cf44'); // Replace with actual user ID
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

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
                            <Avatar alt={userData ? userData.username : 'Loading...'} src="./static/images/avatar/1.jpg" />
                        </ListItemAvatar>

                        {userData ? (
                            <ListItemText
                                primary={userData.username}
                                secondary={
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Affiliation: {userData.collegeName}
                                    </Typography>
                                }
                                sx={{ textAlign: 'center' }}
                            />
                        ) : (
                            <ListItemText
                                primary="Loading..."
                                secondary={<Typography variant="body2" color="text.secondary" align="center">Please wait</Typography>}
                                sx={{ textAlign: 'center' }}
                            />
                        )}
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
                    <Typography variant="h7" color="text.primary" sx={{ fontWeight: 'bold' }}>
                        Contribution Points: {userData ? userData.contributionPoints : 0}
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
            <AppBar position="static" sx={{ backgroundColor: '#F5F5F5' }}>
                <Toolbar>
                    {/* Add your logo image */}
                    <ListItemAvatar>
                        <Avatar alt={userData ? userData.username : 'Loading...'} src="./logo.png" sx={{ width: 56, height: 56, marginTop: '10px' }} />
                    </ListItemAvatar>

                    {/* Second image as a button to navigate to the homepage */}
                    <IconButton
                        onClick={handleHomeClick}
                        disableRipple
                        sx={{
                            marginLeft: '30px',
                            marginTop: '5px',
                            padding: 1,
                            borderRadius: 0,
                            width: '80px',
                            height: '10px',
                            '&:focus': {
                                outline: 'none',
                                boxShadow: 'none'
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
