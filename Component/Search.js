import React from 'react'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";
import Box from '@mui/material/Box';
import SearchForm from './SearchForm';
import Button from '@mui/material/Button';
import { borderRadius } from '@mui/system';
// import CardLine from './CardLine';

const Search = () => {
  return (
    <Box p={1} sx={{ml:3.5, height: "363px",width: "329px", backgroundColor:"#FFFFFF",borderRadius:"10px"}}>
    <Paper pt={0.5}
      component="form"
      sx={{display: "flex" }}
    >
      <IconButton sx={{ p:"9px" }} aria-label="menu">
        <LocationOnOutlinedIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 ,fontFamily: "Roboto",
          fontSize: 11,
          fontWeight: 400,
          lineHeight: 12,
          letterSpacing: 0,
          textAlign: "left"
          }}
        placeholder="Search Locations, Gym and Plans"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "8px" }} aria-label="directions">
        <GpsFixedRoundedIcon />
      </IconButton>
    </Paper>
    <SearchForm/>
    <Box  >
    <Button variant="contained" sx={{ ml:1 ,height:'41px', width:"297px", borderRadius:"3px"}}>
          Find Gym
    </Button>
    </Box>
    </Box>

  )
}

export default Search