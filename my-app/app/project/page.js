'use client'
import { Edit } from "@mui/icons-material";
import EditBox from "./EditBox";
import SimpleContainer from "./SimpleContainer";


import { Grid2 } from '@mui/material';

export default function Home() {

  return (
    <>
      <Grid2 columns={2} columnSpacing={0} container={true} wrap="nowrap">

        <EditBox primaryColor="white" pwidth={750} pheight={1000}>
          {/* Image */}
          <EditBox primaryColor="brown" ryColor="white" pwidth={750} pheight={50}>
            <p>Image box</p>
          </EditBox>
          {/* Text area */}
          <EditBox primaryColor="brown" ryColor="white" pwidth={750} pheight={50}>
            <p>Text Area</p>
          </EditBox>
          {/* Project pic area */}
          <EditBox primaryColor="brown" ryColor="white" pwidth={750} pheight={50}>
            <p>Project pic </p>
          </EditBox>

          {/* Discussion Board */}
          <EditBox primaryColor="brown" ryColor="white" pwidth={750} pheight={50}>
            <p> Discussion Board </p>
          </EditBox>

      </EditBox>


      <EditBox primaryColor="skyblue" pwidth={250} pheight={1000}></EditBox>
    </Grid2 >


    </>
  );
}