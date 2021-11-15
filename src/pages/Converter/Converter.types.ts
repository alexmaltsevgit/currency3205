import { CurrencyName } from "../../store/currency/currency.types";

export type ConversionQuery = {
  from: CurrencyName;
  to: CurrencyName;
  value: number;
};
