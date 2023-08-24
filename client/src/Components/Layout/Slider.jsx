import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import { ReactComponent  as TipsLogo} from "../../assets/tips.svg"

import MenuIcon from "@mui/icons-material/Menu";
const Slider = ({userIsLogin}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openHomeDrawer, setHomeOpenDrawer] = useState(false);
  const lists = ["Home", "About", "Contact", "Sign Up", "Login"];
  const menu = ["Dashboard", "Classes", "Exams", "Logout"];
  return userIsLogin ?(
    <>
    <Drawer
      anchor="left"
      open={openHomeDrawer}
      onClose={()=>setHomeOpenDrawer(false)}
      sx={{
      }}
    >
      <List>
      {menu.map((menu, index) => (
            <ListItemButton key={index}>
              <ListItemText>{menu}</ListItemText>
            </ListItemButton>
          ))}
      </List>
    </Drawer>
    <IconButton
        sx={{
          // marginLeft: "auto",
        }}
        onClick={() => setHomeOpenDrawer(!openHomeDrawer)}
      >
        <TipsLogo sx={{
          margin:'auto',
        }}/>
      </IconButton>
    </>
  ): (
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
      </Drawer>
      <IconButton
        sx={{
          marginLeft: "auto",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Slider;
