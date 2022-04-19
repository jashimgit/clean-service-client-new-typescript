import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./features/orders/orderSlice";
import reviewSlice from "./features/review/reviewSlice";
import serviceReducer from "./features/service/serviceSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    reviews: reviewSlice,
    orders: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
