import { createSlice } from "@reduxjs/toolkit";
import { IOrders } from "../../../interfaces/interfaces";
import { RootState } from "../../store";

type OrderState = {
  allOrders: IOrders[];
};

const initialState: OrderState = {
  allOrders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.allOrders = action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
export const getAllOrders = (state: RootState) => state.orders.allOrders;
