import { CurrencyName } from "./currency.types";

export const mapLanguageToCurrencyName = (language: string): CurrencyName => {
  switch (language.split("-")[0]) {
    case "ru":
      return "rub";
    case "en":
      return "usd";
    default:
      return "eur";
  }
};
