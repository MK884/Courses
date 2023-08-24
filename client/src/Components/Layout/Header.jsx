import React, { useState } from "react";

// MUI Materials
import {
  Container,
  Box,
  Stack,
  Typography,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
} from "@mui/material";

// Components
import Slider from "./Slider";
import { Home } from "../../Pages/index.ts";

const Header = ({userIsLogin}) => {
  const UserIsLogin = userIsLogin; // TO render different header according to user value
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickCloseLogin = () => {
    setOpenLogin(false);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{index === value && children}</div>;
  }

  const settings = ['Profile', 'Class History', 'Logout'];
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const drawerWidth = 240;

  return UserIsLogin ? (
    <AppBar
    position="sticky"
        elevation={0}
        // fullWidth
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}    > <Toolbar>
      <Typography
        variant="h5"
      >
      Hii, Devendra
      </Typography>
      <Box sx={{
        flexGrow:0,
        marginLeft:'auto'
      }}>
        <Tooltip title="Open Settings">
          <IconButton sx={{ p:0}} onClick={handleOpenUserMenu}>
            <Avatar />
          </IconButton>

        </Tooltip>
        <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
      </Box>
      </Toolbar></AppBar>
  ) : (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              marginLeft: "10px",
              color: "#7286D3",
            }}
          >
            COURSES
          </Typography>
          {isMatch ? (
            <Slider />
          ) : (
            <>
              <Tabs
                onChange={(e, value) => setValue(value)}
                value={value}
                sx={{ marginLeft: "auto" }}
                indicatorColor="#7286D3"
              >
                <Tab label="Home" />
              </Tabs>
              <Button
                sx={{ marginLeft: "auto", marginRight: "10px" }}
                onClick={handleClickOpenLogin}
              >
                Login
              </Button>
              <Button variant="contained" onClick={handleClickOpen}>
                Sign Up
              </Button>
              <Dialog
                fullScreen={isMatch}
                open={open}
                onClose={handleClickClose}
                fullWidth
              >
                <DialogTitle>Sign Up Form</DialogTitle>
                <DialogContent>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      margin="1rem"
                      display='flex'
                      flexWrap="wrap"
                      flexDirection='column'
                      gap={4}
                    >
                      <TextField label="First Name" variant="outlined" fullWidth />
                      <TextField label="Last Name" variant="outlined" fullWidth />
                      <TextField label="Phone Number" type="number" variant="outlined" fullWidth />
                      <TextField label="Email" type="email" variant="outlined" fullWidth/>
                      <TextField label="Password" type="password" variant="outlined" fullWidth />
                      <TextField label="Confirm Password" type="password" variant="outlined" fullWidth />
                      <TextField label="Role" helperText="Please Select Your Role" select  variant="outlined" fullWidth >
                        <MenuItem key={1} value={1}>Student</MenuItem>
                        <MenuItem key={2} value={2}>Instructor</MenuItem>
                      </TextField>
                      

                    </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClickClose} autoFocus>
                    Sign Up
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog
                fullScreen={isMatch}
                open={openLogin}
                onClose={handleClickCloseLogin}
              >
                <DialogTitle>Login Form</DialogTitle>
                <DialogContent>
                <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      margin="1rem"
                      display='flex'
                      flexWrap="wrap"
                      flexDirection='column'
                      gap={4}
                    >
                      
                        <TextField type="mail"  label="Email" variant="outlined" fullWidth/>
                        <TextField type="password" label="Password" variant="outlined" fullWidth/>
                        <TextField label="Role" select  variant="outlined" fullWidth helperText="Please Select Your Role">
                        <MenuItem key={1} value={1}>Student</MenuItem>
                        <MenuItem key={2} value={2}>Instructor</MenuItem>
                      </TextField>
                      
                    </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClickCloseLogin} autoFocus>
                    Login
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel> */}
    </>
  );
};

export default Header;
