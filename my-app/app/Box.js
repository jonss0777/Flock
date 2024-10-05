import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function BoxSx() {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: '#FFFFFF',
                        dark: '#FFFFFF',
                    }
                },
            }}
        >
            <Box
                sx={{
                    width: 2000,
                    height: 1000,
                    borderRadius: 0,
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}
            />
        </ThemeProvider>
    );
}