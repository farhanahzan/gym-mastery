import { Box } from '@mui/material';
import React, { useState } from 'react';
import Excercises from '../Components/Excercises';
import HeroBanner from '../Components/HeroBanner';
import SearchExcercises from '../Components/SearchExcercises';

const Home = () => {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  //console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises 
      setExcercises={setExcercises}
      bodyPart={bodyPart}
      excercises={excercises}/>
    </Box>
  );
};

export default Home;
