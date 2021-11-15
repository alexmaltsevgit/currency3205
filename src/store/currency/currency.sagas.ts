import { takeLatest, all, call, put } from "redux-saga/effects";

import { ChangeBaseCurrency, Rates } from "./currency.types";
import { currencyActions } from "./currency.slice";
import { CurrencyAPI } from "../../utils/api/currency";

function* fetchCurrencyRates({ payload: { name } }: ChangeBaseCurrency) {
  try {
    const api = new CurrencyAPI(name);
    const rates: Rates = yield call(api.getRates.bind(api));
    yield put(currencyActions.changeSuccess({ base: name, rates }));
  } catch (e: any) {
    yield put(currencyActions.changeError({ error: e.message }));
  }
}

function* onChangeBaseCurrency() {
  yield takeLatest(currencyActions.changeBaseCurrency.type, fetchCurrencyRates);
}

export default function* currencySaga() {
  yield all([call(onChangeBaseCurrency)]);
}
