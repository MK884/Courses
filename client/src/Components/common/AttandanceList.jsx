import React from 'react'
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";



const AttandanceList = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
  
  return (
    <><Box
    sx={{
      bgcolor: "#fff",
      flexWrap: "wrap",
      borderRadius: "15px",
      flexDirection: "row",
      height: "5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 20px",
    }}
  >
    <Typography fontWeight={500} fontSize={20}>
      Mon,25th July 2023
    </Typography>
    <Button variant="text">75/66</Button>
    <IconButton title="More" onClick={handleClick}>
      {open ? <ExpandLess /> : <ExpandMore />}
    </IconButton>
  </Box>
  {open ? <Box
    sx={{
      height: "500px",
      bgcolor:"#fff",
      borderRadius: "15px",
      padding:"20px",
    
    }}
  >
    <Typography>Review Attandance</Typography>

  </Box> :null}</>
  )
}

export default AttandanceList