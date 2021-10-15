import { configureStore } from "@reduxjs/toolkit";
import { quotesApi } from "./services/quotes";

export const store = configureStore({
  reducer: {
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (gDM) => gDM().concat(quotesApi.middleware),
});
