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
    <Box width={2000} height={4000} flexDirection={"column"} m={2} >

      <Box width={2000} height={1000} sx={{ flexGrow: 1 }}>

        <Grid container spacing={0} direction="row">
          <Grid item style={{ width: '70%', backgroundColor: "white", height: 1000 }} >
            <Card>

            </Card>
          </Grid>
          <Grid item style={{ width: '30%', backgroundColor: "skyblue", height: 1000 }}>
            {/* Item 2 */}

          </Grid>


        </Grid>

      </Box>
      <Box width={2000} height={1000} sx={{ flexGrow: 1 }}>

        <Grid container spacing={0} direction="row" m={2}>
          <Grid item style={{ width: '70%', backgroundColor: "green", height: 1000 }} >
            {/* Title Box */}
            <Box>
              <p>Title Goes here</p>
            </Box>
            {/* Card*/}
            <Box>

              {/* Box 1 */}
              <Grid>
                <p>Box 1</p>
              </Grid>
              {/* Box 2 */}
              <Grid>
              <p>Box 2</p>
              </Grid>
              {/* Box 3 */}
              <Grid>
              <p>Box 3</p>
              </Grid>
              {/* Box 4 */}
              <Grid>
              <p>Box 4</p>
              </Grid>
            </Box>
          </Grid>

          <Grid item style={{ width: '30%', backgroundColor: "skyblue", height: 1000 }}>
            {/* Item 2 */}

          </Grid>
        </Grid>




      </Box>


    </Box >
  );
}
