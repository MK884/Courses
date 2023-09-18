import { Box } from '@mui/material'
import React from 'react'
import Profile from '../assets/instructorProfile.jpeg'

const InstructorProfile = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor:'#fff',
          borderRadius: "15px",
          display:'flex',
          flexDirection:'column',
          flexWrap:'wrap',
          padding: "20px",
          height:'25rem',
          justifyContent: 'center',
          
        }}
      >
        <Box sx={{
          backgroundImage:`url(${Profile})`,
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
        }}/>
          
        


      </Box>
    </>
  )
}

export default InstructorProfile