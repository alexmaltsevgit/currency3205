import { ConversionQuery } from "./Converter.types";
import { CurrencyName } from "../../store/currency/currency.types";
import { stringIsCurrencyName } from "../../store/currency/currency.utils";

export const parseQuery = (query: string): ConversionQuery | false => {
  const parts = query.toLowerCase().split(" ");
  if (parts.length !== 4) return false;

  const value = parts[0];
  const from = parts[1];
  const command = parts[2];
  const to = parts[3];

  if (command !== "in") return false;

  if (!stringIsCurrencyName(from)) return false;
  if (!stringIsCurrencyName(to)) return false;

  return {
    from: from as CurrencyName,
    to: to as CurrencyName,
    value: Number(value),
  };
};
