import * as React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TitlebarImageList from './Component/Gallery';
import  BasicRating  from './Component/Rating';
import Detail from './Component/Detail';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKbRs3CkuRSwqdEkerZiCC5zCwGsQMpfDM7Ly4SLp9Q&s" width="600px" height="300px" ></image>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title} text-align ="center" >
            Lion`s Gym
        </h1> 
      </main>
        <div width="10px" height="10px">
        <image src="https://cdn-icons-png.flaticon.com/128/4517/4517820.png">Near President House ,Delhi</image>   
        </div>
        <BasicRating/>
        <div className=''>
            <h2>Gallery Photo</h2>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }} >
        <Button text-align ="right">See All</Button>
        </Box>
            <TitlebarImageList/>
        </div>
        <div>
          <Detail/>
        </div>
        <div>
          <h3>
            Description
          </h3>
        </div>
        <div display="flex">
        <Typography gutterBottom variant="h4" display="flex">
              $4.50/
        </Typography>
            <p>Week</p>
        <Button variant="contained" >
        Book Now
        </Button>
        </div>
          
    </div>
  )
}
