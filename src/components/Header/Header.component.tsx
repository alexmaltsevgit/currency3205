import React from "react";
import { AppBar, Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position={"static"}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: 6,
        py: 2,
      }}
    >
      <Typography variant="h4">3205 Currency</Typography>

      <Box>
        <Button
          component={RouterLink}
          to={"/converter"}
          variant={"contained"}
          sx={{
            mr: 5,
          }}
        >
          Converter
        </Button>
        <Button component={RouterLink} to={"/library"} variant={"contained"}>
          Library
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
