import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ExcerciseDetail from './Pages/ExcerciseDetail'
import Home from './Pages/Home'

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExcerciseDetail/>}/>

        </Routes>
        <Footer/>
    </Box>
  )
}

export default App