import React from "react";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        pt: 10,
        px: 2,
      }}
    >
      <Typography variant={"h2"}>Home</Typography>
    </Container>
  );
};

export default Home;
