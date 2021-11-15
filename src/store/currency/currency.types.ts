import { PayloadAction } from "@reduxjs/toolkit";

export type CurrencyState = {
  base: CurrencyName;
  rates: Rates;
};

export enum CurrencyName {
  RUB = "rub",
  EUR = "eur",
  USD = "usd",
}

export type Rates = {
  [currency: string]: number;
};

export type ChangeBaseCurrency = PayloadAction<{ name: CurrencyName }>;

export type ChangeSuccess = PayloadAction<CurrencyState>;

export type ChangeError = PayloadAction<{
  error: string;
}>;
