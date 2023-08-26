import React from "react";
import { Header } from "./index.ts";
import { Slider } from "./index.ts";
import { Box,useTheme } from "@mui/material";

const Layout = ({ children }) => {
  const theme = useTheme();
  const userIsLogin = true;
  
  return (
    <Box display='flex' bgcolor='#F4EEEE'>
      <Slider userIsLogin={userIsLogin}/>
      <Header userIsLogin={userIsLogin}/>
      <Box  sx={{
        margin: '6rem 2rem',
        width: '100%',
      }}>
      {children}
      </Box>
    </Box>
  );
};

export default Layout;
