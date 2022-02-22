import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./features/reviewSlice";
import serviceReducer from "./features/service/serviceSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    reviews: reviewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
