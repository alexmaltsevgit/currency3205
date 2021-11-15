import { PayloadAction } from "@reduxjs/toolkit";

export type CurrencyState = {
  base: CurrencyName;
};

export enum CurrencyName {
  RUB = "rub",
  EUR = "eur",
  USD = "usd",
}

export type ChangeBaseCurrency = PayloadAction<CurrencyName>;
