import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

type CurrencyCardProps = {
  name: string;
  value?: string;
  wide?: boolean;
};

const CurrencyCard = ({ name, value, wide }: CurrencyCardProps) => {
  return (
    <Grid item xs={12} md={wide ? 12 : 6}>
      <Paper elevation={3}>
        <Box
          px={5}
          py={15}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant={"h2"}>{name.toUpperCase()}</Typography>
          {value && (
            <Typography variant={"h4"} mt={5}>
              Rate: {value}
            </Typography>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};

export default CurrencyCard;
