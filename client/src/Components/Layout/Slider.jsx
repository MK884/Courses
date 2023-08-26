import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  ListItemIcon,
  Box
} from "@mui/material";
import { ReactComponent as TipsLogo } from "../../assets/tips.svg";
// icons
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import SchoolIcon from "@mui/icons-material/School";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import { useLocation, useNavigate } from "react-router-dom";
import { Rotate90DegreesCcw } from "@mui/icons-material";
const Slider = ({ userIsLogin }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openHomeDrawer, setHomeOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const lists = ["Home", "About", "Contact", "Sign Up", "Login"];
  const menu = [
    {
      title: "Dashboard",
      icon: <GridViewIcon />,
      path: "admin-dashboard",
    },
    {
      title: "Classes",
      icon: <SchoolIcon />,
      path: "classes",
    },
    {
      title: "Quizzes",
      icon: <OnlinePredictionIcon />,
      path: "quizzes",
    },
    {
      title: "Exams",
      icon: <NoteAddOutlinedIcon />,
      path: "exams",
    },
    {
      title: "Assignments",
      icon: <NoteAltOutlinedIcon />,
      path: "assignments",
    },
    {
      title: "Batches",
      icon: <LayersIcon />,
      path: "batches",
    },
  ];
  // const drawerWidth = () =>{
  //   if(openHomeDrawer) return 64;
  //   return 200;
  // };
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return userIsLogin ? (
    <>
      <Drawer
        anchor="left"
        open={openHomeDrawer}
        onClose={() => setHomeOpenDrawer(false)}
        sx={{
          width: 240,
        }}
        variant="permanent"
        PaperProps={{
          sx: { width: 240 },
        }}
      >
        <IconButton
          onClick={() => setHomeOpenDrawer(!openHomeDrawer)}
          sx={{
            height: "4rem",
          }}
        >
          <TipsLogo />
        </IconButton>

        <List>
          {menu.map((menu, index) => (
            <ListItem
              sx={{
                alignItems: "center",
              }}
            >
              <ListItemButton
                selected={selectedIndex === index}
                sx={{
                  borderRadius: "12px",
                  padding: "1rem",
                  color: selectedIndex === index ? "#2C62EE" : null,
                  bgcolor: selectedIndex === index ? "#ECF1FF" : null,
                  width: "10rem",
                }}
                key={index}
                onClick={(event) => {
                  handleListItemClick(event, index);
                  navigate(menu.path, { replace: true });
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selectedIndex === index ? "#2C62EE" : null,
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: selectedIndex === index ? 800 : "normal",
                  }}
                >
                  {menu.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          
          <ListItem >
            <ListItemButton sx={{
              borderRadius:'12px',
              padding:'1rem',
              bgcolor:"#FFEFEF",
              color:"#F93333",
            }}>
              <ListItemIcon >
                <PowerSettingsNewOutlinedIcon sx={{
                  transform:"rotate(270deg)",
                  color:"#F93333"
                }}/>
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>
    </>
  ) : (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {lists.map((list, index) => (
            <ListItemButton key={index}>
              <ListItemText>{list}</ListItemText>
            </ListItemButton>
          ))}
        </List>
        
        <IconButton
          sx={{
            marginLeft: "auto",
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      </Drawer>
    </>
  );
};

export default Slider;
