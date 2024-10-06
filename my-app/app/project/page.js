'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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


const itemData = [
  {
    img: '/DivHacksPicture.png',
    title: 'Breakfast',
  },
  {
    img: '/BirdPicture.png',
    title: 'Burger',
  },
  {
    img: '/groupPicture.png',
    title: 'Camera',
  },
  {
    img: '/LaptopPicture.png',
    title: 'Coffee',
  },

];



export default function Home() {
  return (

    <Box width={2000} height={2000} display="flex" flexDirection="column" m={2} >

      {/* Top box */}

      <Box width={2000} height={1000} display="flex" flexDirection={"row"} m={2} >

        <Box display="flex" justifyContent={"center"} flexDirection={"column"} alignItems={"center"} sx={{ width: '70%', height: 1000, padding: "15px" }}>
          <Box display="flex" justifyContent={"center"} sx={{ width: '100%', height: '30%', overflow: 'hidden', position: 'relative' }} >

            <img alt="someImage" widht='100%' height='100%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/188px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"></img>
          </Box>

          <Box sx={{ width: '100%', height: "30%", padding: "15px" }}>

            <Typography variant="h3">Floc Website</Typography>
            <Typography variant="body1">Join our team! We want to connect students with initiatives (led by peers) on campus to make opportunities more accessible. In order to succeed in college, students have to pursue extracurriculars and gain experience. People should be able to take full advantage of resources at their institutions, instead of it being hidden away in niche areas. By creating a centralized hub of initiatives and projects to improve your skills and contribute to your community in a positive way.
              Through a user-friendly interface of a campus, students are able to navigate four different subject areas: humanities, arts & music, STEM, and finance. From there, they can select the subject they are interested in and access a curated feed of available projects in that area. Each project contains a description, progress bar, and current members. Users can click on the project to access a discussion board. These allow them to interact with members to possibly form a team. Any student can create and invite their peers to join their projects.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', height: "40%", padding: "15px" }}>

            <Typography sx={{ height: "10%" }} variant='h5'>Project Pics</Typography>


            <ImageList sx={{ display: 'flex', overflowX: 'auto', height: "90%", width: "100%" }} cols={3} gap={10}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} sx={{ margin: '5px' }}>
                  <img
                    src={`${item.img}?w=500&h500&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=500&h=500&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>



        </Box>

        <Box sx={{ width: '30%', height: 1000, backgroundColor: 'lightblue', padding: "20px" }}>

          <Typography variant='h1' sx={{ padding: "15px" }}>Interested in joining?</Typography>

          <Button sx={{ backgroundColor: "lightgrey", borderRadius: "10%", padding: "15px" }}>Join</Button>
          <Typography variant='h5' sx={{ padding: "15px" }}>Contributors:</Typography>

        </Box>
      </Box>

      {/* Lower Box */}
      <Box width={2000} height={1000} display="flex" flexDirection={"row"} m={2} >

        <Box display="flex" justifyContent={"center"} alignItems={"center"} sx={{ width: '70%', height: 1000 }}>

          <Box diplay="flex" flexDirection={"column"} sx={{ width: '80%', height: 800, }}>



            <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', height: "10%", backgroundColor: 'darkgrey' }}>
              <Typography variant="h2">Discussion</Typography>
            </Box>


            <Box display={"flex"} gap={"10px"} flexWrap={"wrap"} sx={{ width: '100%', height: "90%", backgroundColor: 'lightyellow' }}>





              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2, // Gap between rows,
                  margin: "20px 40px 20px 40px",
                  height: "100%",
                  width: "100%"
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    sx={{
                      flex: 1,
                      height: 325,
                      backgroundColor: 'lightgrey',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h2" color="black">Column 1</Typography>
                    <Typography variant="body1" color="black">Column 1</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: 1,
                      height: 325,
                      backgroundColor: 'lightgrey',
                      display: 'flex',
                      alignItems: 'center',

                      justifyContent: 'center',
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h2" color="black">Column 1</Typography>
                    <Typography variant="body1" color="black">Column 1</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    sx={{
                      flex: 1,
                      height: 325,
                      backgroundColor: 'lightgrey',
                      display: 'flex',
                      alignItems: 'center',

                      justifyContent: 'center',
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h2" color="black">Column 1</Typography>
                    <Typography variant="body1" color="black">Column 1</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: 1,
                      height: 325,
                      backgroundColor: 'lightgrey',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      justifyContent: 'center',
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h2" color="black">Column 1</Typography>
                    <Typography variant="body1" color="black">Column 1</Typography>
                  </Box>
                </Box>
              </Box>

            </Box>


          </Box>



        </Box>

        <Box sx={{ width: '30%', height: 1000, backgroundColor: 'lightblue' }}>


        </Box>
      </Box>


    </Box >
  );
}
