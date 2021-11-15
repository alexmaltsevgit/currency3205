import { PayloadAction } from "@reduxjs/toolkit";

export type CurrencyState = {
  base: CurrencyName;
};

export type CurrencyName = "eur" | "usd" | "rub";

export type ChangeBaseCurrency = PayloadAction<CurrencyName>;
