import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{
            fontSize:{lg:'44px', xs:'40px'}
        }} mb="23px" mt="30px"
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" mb={4} sx={{LineHeight:'35px'}}>
            check out the most effective excercises
        </Typography>
         <Button variant='contained' color="error" sx={{backgroundColor:'#ff2625', padding:'20px'}} href="#excercises">Explore Excercises</Button>
         <Typography fontWeight={600}
         color="#ff2625"
         sx={{
            opacity:0.1,
            display:{lg:'block', xs:'none'}
         }}
         fontSize="200px"
         >
            Excercise
         </Typography>
         <img src={HeroBannerImage} alt="heroBanner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner