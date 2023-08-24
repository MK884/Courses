import React from 'react'
import { Header, Slider } from '../Components/Layout/index.ts'
import { Box } from '@mui/material'

const StdDashboard = () => {
  return (
    <>
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'row',
    }}
    >

        <Slider userIsLogin={true}/>
    <Header userIsLogin={true}/>
    </Box>
    </>
  )
}

export default StdDashboard