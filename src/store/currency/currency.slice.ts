import { createSlice } from "@reduxjs/toolkit";
import {
  ChangeBaseCurrency,
  ChangeError,
  ChangeSuccess,
  CurrencyState,
} from "./currency.types";
import { mapLanguageToCurrencyName } from "./currency.utils";

const initialState: CurrencyState = {
  base: mapLanguageToCurrencyName(navigator.language),
  rates: {},
};

enum ActionType {
  ChangeBaseCurrency = "changeBaseCurrency",
  ChangeSuccess = "changeSuccess",
  ChangeError = "changeError",
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    [ActionType.ChangeBaseCurrency]: (state, action: ChangeBaseCurrency) => {
      // saga trigger
    },

    [ActionType.ChangeSuccess]: (state, action: ChangeSuccess) => {
      state.base = action.payload.base;
      state.rates = action.payload.rates;
    },

    [ActionType.ChangeError]: (state, action: ChangeError) => {
      console.error(action.payload.error);
    },
  },
});

export const currencyReducer = currencySlice.reducer;
export const currencyActions = currencySlice.actions;
