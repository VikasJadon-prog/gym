import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Button from '@mui/material/Button';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '5px', transform: 'scale(2)' }}
  >
    •
  </Box>
);
const SuccessBookPage = () => (
  <Box sx={{ backgroundColor: "#E7A80E", width: 390, height: 844 }}>
    <ArrowBackIcon sx={{ m: 1.7 }} />
    <Box align="center" sx={{ mt: 10 }}>
      <CheckCircleRoundedIcon sx={{ color: "#01CB9B", width: 125, height: 125 }} />
    </Box>
    <Box align="center" color="#FFFFFF" sx={{ mt: 2 }}>
      <Typography>
        Wohoo!!!
      </Typography>
      <Typography>
        Booking Successful.
      </Typography>
      <Typography sx={{ mt: 1, fontSize: 12 }}>
        Thanks for choosing BeFIT
      </Typography>
    </Box>
    <Box sx={{p:1 ,ml:2.5,mt: 8, backgroundColor: "#FFFFFF", width: 350, height: 175, borderRadius: 5 ,fontFamily:"Poppins",boxShadow:20}}>
     <Typography sx={{ml:2,pt:1.5,fontSize:15}}>
     {bull} GymPoint will call you regarding your starting date & timing.
      </Typography>
      <Typography sx={{ml:2,fontSize:15}}>
       {bull} It is requsted to strictly follow our trainers routine & reach on time.
      </Typography>
      <Typography sx={{ml:2,fontSize:15}}>
      {bull} For any queries feel free to contact our Customer care.
      </Typography>
    </Box>
    <Box display="flex" sx={{ml:3,mt:5}} >
      <SupportAgentIcon/>
      <Box color="#FFFFFF" sx={{ml:2}}>
    <Typography   >
    Customer care : 1500 7373 4666 
      </Typography>
    <Typography >
      (8.00AM-10.00PM)
      </Typography>
      </Box>
     </Box>
     <Button  sx={{mt: 5,ml:5,width:303,height:60,backgroundColor:"#F54242",borderRadius:15,fontColor:"#FFFFFF",boxShadow:12,fontSize:20}}>Let”s Begin</Button>
  </Box>
)

export default SuccessBookPage
