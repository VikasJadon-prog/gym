import React, { Component } from 'react'
import Search from '../Component/Search';
import TimeLine from '../Component/TimeLine'
import Box from '@mui/material/Box';

const Card = () => {
  return (
     <Box sx={{ backgroundColor: "#F3F3F3"}}>
        <Search/>
        <TimeLine/>
     </Box>
  )
}


export default Card