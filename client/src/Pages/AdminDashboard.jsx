import React from "react";
import { Box, Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection:'column',
      gap:(5)
    }}
    >

      <Box
      
        sx={{
          flex:(1),
          padding:"20px",
          borderRadius:'15px',
          display:'flex',
          flexWrap:'wrap',
          bgcolor:'#fff',
          flexDirection:'column',
          minHeight:'40rem',
        }}
      >
        <Typography variant="h3">Clerk</Typography>
      
      </Box>
      <Box
      
        sx={{
          flex:(1),
          padding:"20px",
          borderRadius:'15px',
          display:'flex',
          flexWrap:'wrap',
          bgcolor:'#fff',
          flexDirection:'column',
          minHeight:'40rem',
        }}
      >
        <Typography variant="h3">Instructors</Typography>
      
      </Box>
      <Box
      
        sx={{
          flex:(1),
          padding:"20px",
          borderRadius:'15px',
          display:'flex',
          flexWrap:'wrap',
          bgcolor:'#fff',
          flexDirection:'column',
          minHeight:'40rem',
        }}
      >
        <Typography variant="h3">Students</Typography>
      
      </Box>

      </Box>
    </>
  );
};

export default AdminDashboard;
