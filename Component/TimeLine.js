
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function OutlinedTimeline() {
  return (
    <Box p={1} sx={{ml:3,mt:2}}>
      <Typography variant="h6" gutterBottom   sx={{fontSize:15,fontWeight:'bold',fontFamily: "Roboto",fontColor:"#021934"}}>
        Recent Search
      </Typography>
      <Timeline sx={{ml:-30}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent >
          <ListItem
            color="primary"
            sx={{m:-1.5, width:"35ch"}}
          >
            <ListItemText robot-setsize={12}
              primary=" Mumbai "
              secondary=" Jan 9 , 2014 | 2 Members "
            />
            <ArrowForwardIosOutlinedIcon/>
          </ListItem>
          <Divider component="li" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent >
          <ListItem
            color="primary"
            sx={{m:-1.5, width:"35ch"}}
          >
            <ListItemText robot-setsize={12}
              primary=" Mumbai "
              secondary=" Jan 9 , 2014 | 2 Members "
            />
            <ArrowForwardIosOutlinedIcon/>
          </ListItem>
          <Divider component="li" />
        </TimelineContent>
      </TimelineItem>
     
    </Timeline>
    </Box>
  );
}