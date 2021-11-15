import { createSlice } from "@reduxjs/toolkit";
import { CurrencyState } from "./currency.types";
import { mapLanguageToCurrencyName } from "./currency.utils";

const initialState: CurrencyState = {
  base: mapLanguageToCurrencyName(navigator.language),
};

enum ActionType {
  ChangeBaseCurrency = "changeBaseCurrency",
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    [ActionType.ChangeBaseCurrency]: (state, action) => {
      state.base = action.payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
export const currencyActions = currencySlice.actions;
