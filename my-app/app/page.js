'use client';

import React, { useEffect, useState } from 'react';
import BoxSx from "@/app/Box"; // Adjust according to your actual import
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import BookIcon from '@mui/icons-material/Book';
import ComputerIcon from '@mui/icons-material/Computer';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

export default function Home() {
    const [username, setUsername] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [campusName, setCampusName] = useState('');
    const [campusPoints, setCampusPoints] = useState(0); // Initialize with 0
    const [loading, setLoading] = useState(true); // Loading state

    const userId = '6702777dee86cd3de307cf42'; // Replace with the dynamic user ID
    const campusId = '67027e0eee86cd3de307cf46'; // Replace with the specific campus ID

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch(`http://localhost:4000/api/user/${userId}`);
                const userData = await userResponse.json();
                console.log('User Data:', userData); // Log user data
                if (userData) {
                    setUsername(userData.username);
                    setCollegeName(userData.collegeName);
                }

                // Fetch campus data
                const campusResponse = await fetch(`http://localhost:4000/api/campus/${campusId}`);
                const campusData = await campusResponse.json();
                console.log('Campus Data:', campusData); // Log campus data
                if (campusData) {
                    setCampusName(campusData.name);
                    setCampusPoints(campusData.communityPoints || 0); // Default to 0 if undefined
                }
            } catch (error) {
                console.error('Error fetching user or campus data:', error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchUserData();
    }, [userId, campusId]);

    const handleSubjectClick = (subject) => {
        console.log(`Clicked on ${subject}`);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#F5F5F5' }}>
            {loading ? ( // Show loading state
                <Typography variant="h6" sx={{ color: 'black' }}>
                    Loading...
                </Typography>
            ) : (
                <>
                    <Typography
                        variant="h1"
                        sx={{ margin: '0px 0', color: 'black' }}
                    >
                        {campusName || 'College Name'}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ margin: '10px 0', color: 'black' }}
                    >
                        Community Points: {campusPoints || 0}
                    </Typography>
                </>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Button onClick={() => handleSubjectClick('Science')} sx={{ margin: '0 10px', flexDirection: 'column', alignItems: 'center' }}>
                    <ScienceIcon fontSize="large" />
                    <Typography variant="caption">Science</Typography>
                </Button>
                <Button onClick={() => handleSubjectClick('Literature')} sx={{ margin: '0 10px', flexDirection: 'column', alignItems: 'center' }}>
                    <BookIcon fontSize="large" />
                    <Typography variant="caption">Literature</Typography>
                </Button>
                <Button onClick={() => handleSubjectClick('Technology')} sx={{ margin: '0 10px', flexDirection: 'column', alignItems: 'center' }}>
                    <ComputerIcon fontSize="large" />
                    <Typography variant="caption">Technology</Typography>
                </Button>
                <Button onClick={() => handleSubjectClick('Art')} sx={{ margin: '0 10px', flexDirection: 'column', alignItems: 'center' }}>
                    <ArtTrackIcon fontSize="large" />
                    <Typography variant="caption">Art</Typography>
                </Button>
            </Box>
            <Typography
                variant="body1"
                sx={{ marginTop: '20px', color: 'gray', fontFamily: 'Montserrat' }}
            >
                Select a track to start exploring
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img
                    src="./room.png" // Replace with your image path
                    alt="Description of Image"
                    style={{ width: '80%', maxWidth: '600px', height: 'auto' }}
                />
            </Box>
        </div>
    );
}
