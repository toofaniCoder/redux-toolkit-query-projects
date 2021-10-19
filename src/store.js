import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./services/commentsApi";

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(commentsApi.middleware),
});
