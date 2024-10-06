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
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];



export default function Home() {
  return (

    <Box width={2000} height={2000} display="flex" flexDirection="column" m={2} >

      {/* Top box */}

      <Box width={2000} height={1000} display="flex" flexDirection={"row"} m={2} >

        <Box  display="flex" justifyContent={"center"} flexDirection={"column"} alignItems={"center"} sx={{ width: '70%', height: 1000, padding:"15px" }}>
          <Box   display="flex" justifyContent={"center"} sx={{ width: '100%', height:'20%', overflow:'hidden', position:'relative'}} >

            <img alt="someImage" widht='100%' height='100%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/188px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"></img>
          </Box>

          <Box  sx={{ width: '100%', height:"40%", padding:"15px"}}>

            <Typography variant="h3">Floc Website</Typography>
            <Typography variant="body1">Join our team! We want to connect students with initiatives (led by peers) on campus to make opportunities more accessible. In order to succeed in college, students have to pursue extracurriculars and gain experience. People should be able to take full advantage of resources at their institutions, instead of it being hidden away in niche areas. By creating a centralized hub of initiatives and projects to improve your skills and contribute to your community in a positive way. 
Through a user-friendly interface of a campus, students are able to navigate four different subject areas: humanities, arts & music, STEM, and finance. From there, they can select the subject they are interested in and access a curated feed of available projects in that area. Each project contains a description, progress bar, and current members. Users can click on the project to access a discussion board. These allow them to interact with members to possibly form a team. Any student can create and invite their peers to join their projects. 
 </Typography>
          </Box>
          <Box  sx={{ width: '100%', height:"40%", padding:"15px"}}>  

            <Typography variant='h5'>Project Pics</Typography>
          

          <ImageList sx={{ display: 'flex', overflowX: 'auto' }} cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=364&h=364&fit=crop&auto=format`}
            srcSet={`${item.img}?w=364&h=364&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Box>



        </Box>

        <Box sx={{ width: '30%', height: 1000, backgroundColor: 'lightblue', padding:"20px" }}>

          <Typography variant='h1' sx={{padding:"15px"}}>Interested in joining?</Typography>

          <Button sx={{backgroundColor:"lightgrey", borderRadius:"10%", padding:"15px"}}>Join</Button>
          <Typography variant='h5' sx={{padding:"15px"}}>Contributors:</Typography>

        </Box>
      </Box>

      {/* Lower Box */}
      <Box width={2000} height={1000} display="flex" flexDirection={"row"} m={2} >

        <Box display="flex" justifyContent={"center"} alignItems={"center"} sx={{ width: '70%', height: 1000 }}>

          <Box diplay="flex" flexDirection={"column"} sx={{ width: '80%', height: 800, }}>



            <Box  display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', height: "10%", backgroundColor: 'darkgrey' }}>
              <Typography variant="h2">Discussion</Typography>
            </Box>


            <Box display={"flex"}  justifyContent={"center"} flexWrap={"wrap"} sx={{ width: '100%', height: "90%", backgroundColor: 'lightyellow', padding:"10px"}}>

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

              <Card sx={{ widht:"50%" , height:"50%", padding:"15px", margin:"15px"}}>
                <CardContent >

                  <Typography variant="h3">Thread</Typography>
                  <Typography variant="body1">Blah blah</Typography>
                  <Typography variant="h3"> Comments </Typography>
                </CardContent>
              
              </Card>
              <Card sx={{ widht:"50%" , height:"50%", padding:"15px", margin:"15px" }}>
                <CardContent>

                <Typography variant="h3">Thread</Typography>
                  <Typography variant="body1">Blah blah</Typography>
                  <Typography variant="h3"> Comments </Typography>
                </CardContent>
              
              </Card>

              <Card sx={{ widht:"50%" , height:"50%", padding:"15px", margin:"15px" }}>
                <CardContent>
                <Typography variant="h3">Thread</Typography>
                  <Typography variant="body1">Blah blah</Typography>
                  <Typography variant="h3"> Comments </Typography>
                </CardContent>
              
              </Card>

              <Card sx={{ widht:"50%" , height:"50%", padding:"15px", margin:"15px" }}>
                <CardContent>

                <Typography variant="h3">Thread</Typography>
                  <Typography variant="body1">Blah blah</Typography>
                  <Typography variant="h3"> Comments </Typography>
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
