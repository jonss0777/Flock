'use client'

import BoxSx from "@/app/Box";
import Typography from '@mui/material/Typography'; // Import Typography
import { Box, Button } from '@mui/material'; // Import Box and Button for layout and buttons
import ScienceIcon from '@mui/icons-material/Science'; // Import Science icon
import BookIcon from '@mui/icons-material/Book'; // Import Book icon
import ComputerIcon from '@mui/icons-material/Computer'; // Import Computer icon
import ArtTrackIcon from '@mui/icons-material/ArtTrack'; // Import Art icon

export default function Home() {
    const handleSubjectClick = (subject) => {
        // Handle button click for each subject
        console.log(`Clicked on ${subject}`);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
            <Typography
                variant="h1"
                sx={{ margin: '0px 0', color: 'black' }}
            >
                College Name {/* Replace with the actual college name */}
            </Typography>
            <Typography
                variant="h6"
                sx={{ margin: '10px 0', color: 'black' }}
            >
                Community Points: 0
            </Typography>

            {/* Adjust marginTop to lift the buttons closer to the community points */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                {/* Icons for subjects as buttons */}
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
                sx={{ marginTop: '20px', color: 'gray', fontFamily: 'Montserrat' }} // Adjust margin and color as needed
            >
                Select a track to start exploring
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img
                    src="./room.png" // Replace with your image path
                    alt="Description of Image"
                    style={{ width: '80%', maxWidth: '600px', height: 'auto' }} // Adjust width as needed
                />
            </Box>
        </div>
    );
}
