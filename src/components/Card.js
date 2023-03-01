import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <Card sx={{ width: '18%',backgroundColor:'#00001a',height: '380px' , margin:'4px',borderRadius:'0px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#eaaa56" gutterBottom>
          New
        </Typography>
        <Typography sx={{ mb: 1.5 ,fontWeight:'600' }} color="#fff">
          Hydrogen VS Electric cars
        </Typography>
        <Typography sx={{ fontSize:12 , color:'#fff',fontWeight:'lighter' }}>
          Will hidrogen consumed from the car and stored in the database for comparison?
        </Typography>
        <Divider sx={{ backgroundColor:'#3d3d57' , margin:'16px' }} />
        <Typography sx={{ mb: 1.5 ,fontWeight:'600'}} color="#fff">
        The Downsides of AI Artistry
        </Typography>
        <Typography sx={{ fontSize:12 , color:'#fff',fontWeight:'lighter' }}>
          Will hidrogen consumed from the car and stored in the database for comparison?
        </Typography>
        <Divider sx={{ backgroundColor:'#3d3d57', margin:'16px' }} />
        <Typography sx={{ mb: 1.5,fontWeight:'600' }} color="#fff">
        Is VC Funding Drying up?
        </Typography>
        <Typography sx={{ fontSize:12 , color:'#fff' ,fontWeight:'lighter'}}>
          Will hidrogen consumed from the car and stored in the database for comparison?
        </Typography>
        
      </CardContent>
    </Card>
  );
}