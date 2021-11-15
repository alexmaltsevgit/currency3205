import { configureStore, Middleware } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency/currency.slice";
import logger from "redux-logger";

const middleware: Array<Middleware> = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  middleware: middleware,
});

export default store;
