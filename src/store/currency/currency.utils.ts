import { CurrencyName } from "./currency.types";

export const mapLanguageToCurrencyName = (language: string): CurrencyName => {
  switch (language.split("-")[0]) {
    case "ru":
      return CurrencyName.RUB;
    case "en":
      return CurrencyName.USD;
    default:
      return CurrencyName.EUR;
  }
};

export const stringIsCurrencyName = (str: string) => {
  return Object.values<string>(CurrencyName).includes(str);
};
