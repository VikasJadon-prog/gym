import * as React from "react";
import Box from '@mui/material/Box';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PortraitIcon from "@mui/icons-material/Portrait";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import InputBase from "@mui/material/InputBase";
import AvTimerSharpIcon from "@mui/icons-material/AvTimerSharp";


const SearchForm = () => {
  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-Duration" fontSize={12.64}>Duration</InputLabel>
        <Input
          id="input-Duration"
          startAdornment={
            <InputAdornment position="start">
              <DateRangeIcon />
              <InputBase
                sx={{
                  ml: 1.5,
                  flex: 1,
                  fontSize: 12,
                  fontWeight:'bold', 
                  fontColor:"#021934"
                }}
                placeholder="2 Month"
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-Time">Time</InputLabel>
        <Input
          id="input-Time"
          startAdornment={
            <InputAdornment position="start">
              <AvTimerSharpIcon />
              <InputBase
                sx={{
                  ml: 1.5,
                  flex: 1,
                  fontSize: 12,
                  fontWeight:'bold', 
                  fontColor:"#021934"
                }}
                placeholder="2 Hour"
              />
            </InputAdornment>
          }
          // placeholder="Filter price, Gym and much more"
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-Member">Member</InputLabel>
        <Input
          id="input-Member"
          startAdornment={
            <InputAdornment position="start">
              <PortraitIcon />
              <InputBase
                sx={{
                  ml: 1.5,
                  flex: 1,
                  fontSize: 12,
                  fontWeight:'bold', 
                  fontColor:"#021934"
                }}
                placeholder="1 Member"
              />
            </InputAdornment>
          }
          // placeholder="Filter price, Gym and much more"
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-Filter">Filter</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <FilterAltOutlinedIcon />
              <InputBase
                sx={{ ml: 1, fontSize: 12 }}
                placeholder="Filter"
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
    </div>
  )
}

export default SearchForm