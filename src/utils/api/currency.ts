import { CurrencyName } from "../../store/currency/currency.types";

export class CurrencyAPI {
  public static readonly url = "https://open.er-api.com/v6/latest";

  public baseCurrency: CurrencyName;

  public constructor(baseCurrency: CurrencyName) {
    this.baseCurrency = baseCurrency;
  }

  public getRates = async () => {
    const url = `${CurrencyAPI.url}/${this.baseCurrency}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.rates;
  };
}
