import { Box, Button, Typography, TextField, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchData, excerciseOptions } from '../Utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    const fetchExcerciseData = async ()=> {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions)

        setBodyParts(['all', ...bodyPartsData])
    }
    fetchExcerciseData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const excerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        excerciseOptions
      );

      const searchedExcercises = excerciseData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search) ||
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('')
      setExcercises(searchedExcercises)
    }
  };
  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You
        <br />
        Shold Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: {
              lg: '800px',
              xs: '350px',
              backgroundColor: '#fff',
              borderRadius: '40px',
            },
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Excercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>

        <HorizontalScrollbar data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} isBodyPart/>
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
