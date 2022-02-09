import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IService } from "./../../../interfaces/interfaces";

interface IServiceSliceState {
  serviceList: IService[];
}

// initial state
const initialState: IServiceSliceState = {
  serviceList: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<IService>) => {
      state.serviceList = [action.payload];
    },
  },
});

export const { setService } = serviceSlice.actions;
export default serviceSlice.reducer;
export const getAllService = (state: RootState) => state.service.serviceList;
