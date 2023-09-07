import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import AttandanceList from "../Components/common/AttandanceList.jsx";
import AddIcon from "@mui/icons-material/Add";
const Attandance = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Toolbar>
          <Typography fontWeight={450} fontSize={35}>
            Attandance
          </Typography>
          <Button
            sx={{
              marginLeft: "auto",
            }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Create
          </Button>
        </Toolbar>
        <AttandanceList/>
      </Box>
    </>
  );
};

export default Attandance;
