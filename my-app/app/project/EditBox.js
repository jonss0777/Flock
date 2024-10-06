import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

const EditBox = ({ children,  primaryColor, primaryDark, pwidth, pheight }) => {
    // Define the theme using the passed parameters
    const theme = {
        palette: {
            primary: {
                main: primaryColor,
                dark: primaryDark,
            },
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Box 
                sx={{
                    width: pwidth,
                    height: pheight,
                    borderRadius: 0,
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}
            >
              {children}

            </Box>
        </ThemeProvider>
    );
};


export default EditBox;
