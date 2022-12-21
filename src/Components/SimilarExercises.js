import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmnentExercises }) => {
  console.log(equipmnentExercises)
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: '2',
          position: 'relative',
        }}
      >
        {targetMuscleExercises.length ?(
          <HorizontalScrollbar data={targetMuscleExercises} />
        ): <Loader/>}
      </Stack>

      <Typography variant="h3" mt={10} mb={5} >
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: '2',
          position: 'relative',
        }}
      >
        {equipmnentExercises.length ?(
          <HorizontalScrollbar data={equipmnentExercises} />
        ): <Loader/>}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
