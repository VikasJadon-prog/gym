import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function ActionAreaCard() {
  return (
    <Box sx={{ml:3,mt:3}}>
        <Card sx={{width:292,height:340,borderRadius:3,backgroundColor:'#000000' }}>
      <CardActionArea>
        <CardMedia sx={{width:292,height:228,borderRadius:3}}
          component="img"
          image="https://media.istockphoto.com/id/1213615970/photo/gym-background-fitness-weight-equipment-on-empty-dark-floor.jpg?s=612x612&w=0&k=20&c=WyPxLxpfd9Pi6l0BMyWsqrrZIi_SrMmgTtYn8k08qQI="
        />
        <Box display='flex' color="#FFFFFF" >
        <Box sx={{ml:2,mt:1}}>
            <Rating defaultValue={5} size='small' />
            <Typography variant="h5" sx={{mt:-.2, fontSize:20,fontWeight:500}}>
                Golds gym
            </Typography>
            <Typography  variant="body2" fontSize="9px"sx={{mt:.5}} >
            Near Lawang, Malang
            </Typography>
            <Typography variant="body2" fontSize="12px">
            (100 reviews)
         </Typography>
          </Box>
          <Box sx={{ml:3,mt:2}}>
          <Box color='white' display='flex' sx={{mt:1,ml:1.5}}>
          <Typography variant="h5" fontSize="20px" sx={{fontWeight:550}}>
                Rs.188/
            </Typography>
            <Typography  variant="body2" fontSize="20px">
            day
            </Typography>
          </Box>
          <Button sx={{color:'#FFFFFF',mt:1,width:134,heigth:32,borderRadius:1,backgroundColor:'#2D72C4' ,fontSize:'13'}}>Gym Detail</Button>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
    </Box>
  );
}
