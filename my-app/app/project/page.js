'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));




export default function Home() {
  return (

    <Box width={2000} height={2000} display="flex" flexDirection="column" m={2} >

      {/* Top box */}

      <Box width={2000} height={1000} display="flex" flexDirection={"row"} m={2} >

        <Box sx={{ width: '70%', height: 1000, backgroundColor: 'red' }}>
          <img alt="someImage"src="/public/logo.jpg"></img>

          <Typography variant="h3">Hey how are you</Typography>
          <Typography variant="body1">Some random text should go here</Typography>



        </Box>

        <Box sx={{ width: '30%', height: 1000, backgroundColor: 'lightblue' }}>


        </Box>
      </Box>

      {/* Lower Box */}
      <Box width={2000} height={1000} display="flex" flexDirection={"row"} m={2} >

        <Box display="flex" justifyContent={"center"} alignItems={"center"} sx={{ width: '70%', height: 1000 }}>

          <Box diplay="flex" flexDirection={"column"} sx={{ width: '80%', height: 800, }}>



            <Box  display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', height: "10%", backgroundColor: 'darkgrey' }}>
              <Typography variant="h2">Title</Typography>
            </Box>


            <Box display={"flex"} gap={"15px"} justifyContent={"center"} flexWrap={"wrap"} sx={{ width: '100%', height: "90%", backgroundColor: 'lightyellow', padding:"10px"}}>

              {/* <Box sx={{ width: '45%', height: '45%', backgroundColor: "grey" }}>
                <p>Hello</p>
              </Box>


              <Box sx={{ width: '45%', height: '45%', backgroundColor: "grey" }}>
                <p>Hello</p>
              </Box>

              <Box sx={{ width: '45%', height: '45%', backgroundColor: "grey" }}>
                <p>Hello</p>
              </Box>

              <Box sx={{ width: '45%', height: '45%', backgroundColor: "grey" }}>
                <p>Hello</p>
              </Box> */}

              <Card sx={{ widht:"45%" , height:"45%" }}>
                <CardContent>

                  <Typography variant="h3">Hey how are you</Typography>
                  <Typography variant="body1">Some random text should go here</Typography>
                </CardContent>
              
              </Card>

              <Card sx={{ widht:"45%" , height:"45%" }}>
                <CardContent>

                  <Typography variant="h3">Hey how are you</Typography>
                  <Typography variant="body1">Some random text should go here</Typography>
                </CardContent>
              
              </Card>

              <Card sx={{ widht:"45%" , height:"45%" }}>
                <CardContent>

                  <Typography variant="h3">Hey how are you</Typography>
                  <Typography variant="body1">Some random text should go here</Typography>
                </CardContent>
              
              </Card>

              <Card sx={{ widht:"45%" , height:"45%" }}>
                <CardContent>

                  <Typography variant="h3">Hey how are you</Typography>
                  <Typography variant="body1">Some random text should go here</Typography>
                </CardContent>
              
              </Card>



            </Box>


          </Box>



        </Box>

        <Box sx={{ width: '30%', height: 1000, backgroundColor: 'lightblue' }}>


        </Box>
      </Box>


    </Box >
  );
}
