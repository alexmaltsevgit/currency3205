import React, { useCallback, useEffect } from "react";
import { Container, FormControl, Grid, Input, InputLabel } from "@mui/material";
import { CurrencyName } from "../../store/currency/currency.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.js";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard.component";
import { currencyActions } from "../../store/currency/currency.slice";

const Library = () => {
  const base = useSelector((state: RootState) => state.currency.base);
  const rates = useSelector((state: RootState) => state.currency.rates);
  const dispatch = useDispatch();

  const onBlur = useCallback(
    (e) => {
      const userCurrency = e.target.value;
      dispatch(currencyActions.changeBaseCurrency({ name: userCurrency }));
    },
    [dispatch]
  );

  const fixInputMaximumLength = useCallback((e) => {
    const value = e.target.value;
    if (value.length > 3) {
      e.target.value = value.slice(0, 3);
    }
  }, []);

  useEffect(() => {
    dispatch(currencyActions.changeBaseCurrency({ name: base }));
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        py: 10,
      }}
    >
      <FormControl
        sx={{
          width: "100%",
          maxWidth: "500px",
          mb: 7,
        }}
      >
        <InputLabel htmlFor={"base-currency"}>Base currency</InputLabel>
        <Input
          id={"base-currency"}
          defaultValue={base}
          onBlur={onBlur}
          onChange={fixInputMaximumLength}
        />
      </FormControl>

      <Grid container spacing={5}>
        <CurrencyCard name={base || "Write base currency"} wide />

        {Object.values(CurrencyName).map(
          (currency) =>
            currency !== base && (
              <CurrencyCard
                key={currency}
                name={currency}
                value={rates[currency.toUpperCase()]?.toFixed(2) || "???"}
              />
            )
        )}
      </Grid>
    </Container>
  );
};

export default Library;
