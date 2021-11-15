import { all, call } from "redux-saga/effects";
import currencySaga from "./currency/currency.sagas";

export default function* rootSaga() {
  yield all([call(currencySaga)]);
}
