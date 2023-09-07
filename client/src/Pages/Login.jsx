import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Box, Tabs, Tab } from "@mui/material";
import { ReactComponent as TipsLogo } from "../assets/tips.svg";

const Login = () => {
  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{index === value && children}</div>;
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
        }}
      >
        <Toolbar>
          <TipsLogo />
          <Tabs
            onChange={(e, value) => setValue(value)}
            value={value}
            sx={{ marginLeft: "auto" }}
          >
            <Tab label="Signup" />
            <Tab label="Login" />
          </Tabs>
        </Toolbar>
      </AppBar>


      <TabPanel value={value} index={0}>
        <Box
          bgcolor="#9AC5F4"
          height="98vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: 'rgba( 66, 182, 194, 0.35 )'
          }}
        >
          <Box
          
            sx={{
              background:'rgba( 255, 255, 255, 0.35 )',
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter:'blur(3px)',
              borderRadius:'10px',
              margin:"10rem",
              border:'1px solid rgba( 255, 255, 255, 0.18 )',
              width:'100%',
              height:'56rem',
            }}
            
          >
            Helo
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Login
      </TabPanel>
    </>
  );
};

export default Login;
