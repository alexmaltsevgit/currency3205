import React, { useCallback, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { parseQuery } from "./Converter.utils";
import { CurrencyAPI } from "../../utils/api/currency";
import { capitalized } from "../../utils/utils";

const Converter = () => {
  const [response, setResponse] = useState("Submit query");

  const currencyInput = useRef<HTMLInputElement | null>(null);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();

    const input = currencyInput.current?.value ?? "";
    const query = parseQuery(input);

    if (!query) {
      setResponse("Invalid query");
      return;
    }

    setResponse("Loading...");

    const { from, to, value } = query;
    const api = new CurrencyAPI(from);
    const rates = await api.getRates();
    const multiplier = rates[to.toUpperCase()];

    const resultValue = (value * multiplier).toFixed(2);
    const result = `${value} ${from} in ${to} is ${resultValue}`;
    setResponse(capitalized(result));
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box>
        <Box>
          <Paper elevation={3}>
            <Box py={10} px={7}>
              <form onSubmit={onSubmit}>
                <FormControl
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel htmlFor="currency-query">Query</InputLabel>
                  <Input
                    id={"currency-query"}
                    inputRef={currencyInput}
                    onSubmit={onSubmit}
                  />
                  <Button
                    type={"submit"}
                    sx={{
                      py: 2,
                      mt: 2,
                    }}
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Paper>
        </Box>

        <Box mt={10}>
          <Paper elevation={3}>
            <Box py={10} px={7}>
              <Typography variant={"h4"}>{response}</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Converter;
