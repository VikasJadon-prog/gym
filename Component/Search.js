import React from 'react'
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DateRangeIcon from "@mui/icons-material/DateRange";
import InputLabel from "@mui/material/InputLabel";
import AvTimerSharpIcon from "@mui/icons-material/AvTimerSharp";
import PortraitIcon from "@mui/icons-material/Portrait";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";


const Search = () => {
  return (
    <Box p={1} sx={{ml:3.5, height: "363px",width: "329px", backgroundColor:"#FFFFFF",borderRadius:"10px"}}>
    <Box pt={0.5}
      component="form"
      sx={{display: "flex" }}
    >
      <IconButton sx={{ p:"9px" }} aria-label="menu">
        <LocationOnOutlinedIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 ,
          fontSize: 12,
          textAlign: "left",
          }}
        placeholder="Search Locations, Gym and Plans"
      /> 
      <IconButton color="primary" sx={{ p: "8px",color:'#D92043' }} aria-label="directions">
        <GpsFixedRoundedIcon/>
      </IconButton> 
    </Box>
    <Divider sx={{ width:260,ml:1.5 }} orientation="horizontal" />   
    <Box sx={{mt:1.5}}>
      <InputLabel htmlFor="input-Duration"  sx={{ml:1.3,fontSize:12}}>Duration</InputLabel>
      <IconButton  aria-label="menu" sx={{mt:-.5}}>
      <DateRangeIcon />
      </IconButton>
      <InputBase
            sx={{
                  fontSize: 14,
                  fontWeight:'bold', 
                  fontColor:"#021934"
                }}
                placeholder="2 Month"
              />
    </Box>
    <Divider sx={{ width:260,ml:1.5,mt:-.5 }} orientation="horizontal" />
    <Box sx={{mt:1.5}}>
      <InputLabel htmlFor="input-Duration"  sx={{ml:1.3,fontSize:12}}>Timing</InputLabel>
      <IconButton  aria-label="menu" sx={{mt:-.5}}>
        <AvTimerSharpIcon/>
      </IconButton>
      <InputBase
                sx={{
                  fontSize: 14,
                  fontWeight:'bold', 
                  fontColor:"#021934"
                }}
                placeholder="2 Hours"
              />
    </Box>
    <Divider sx={{ width:260,ml:1.5,mt:-.5 }} orientation="horizontal" />
    <Box sx={{mt:1.5}}>
      <InputLabel htmlFor="input-Duration"  sx={{ml:1.3,fontSize:12}}>Members</InputLabel>
      <IconButton  aria-label="menu" sx={{mt:-.5}}>
      <PortraitIcon />
      </IconButton>
      <InputBase
            sx={{
                  fontSize: 14,
                  fontWeight:'bold', 
                  fontColor:"#021934"
                }}
                placeholder="2 Members"
              />
    </Box>
    <Divider sx={{ width:260,ml:1.5,mt:-.5 }} orientation="horizontal" />
    <Box sx={{mt:1.5}}>
      <InputLabel htmlFor="input-Duration"  sx={{ml:1.3,fontSize:12}}>Filter</InputLabel>
      <IconButton  aria-label="menu" sx={{mt:-.5}}>
      <FilterAltOutlinedIcon />
      </IconButton>
      <InputBase
            sx={{
                  fontSize: 14,
                  fontColor:"#021934"
                }}
                placeholder="Filter price, Gym and much more"
              />
    </Box>
    <Divider sx={{ width:260,ml:1.5,mt:-.5 }} orientation="horizontal" />
    <Box  >
    <Button variant="contained" sx={{ m:1 ,height:'41px', width:"297px", borderRadius:"3px"}}>
          Find Gym
    </Button>
    </Box>
    </Box>
  )
}

export default Search