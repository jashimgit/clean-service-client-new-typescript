import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IService } from "./../../../interfaces/interfaces";

interface Service {
  _id?: string;
  serviceName: string;
  price: string;
  status: string;
  imageUrl: string;
  details: string;
  id?: string;
  __v?: number;
}
interface ServiceState {
  allService: Service[];
}

// initial state
const initialState: ServiceState = {
  allService: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action) => {
      state.allService = action.payload;
    },
  },
});

export const { setService } = serviceSlice.actions;
export default serviceSlice.reducer;
export const getAllService = (state: RootState) => state.service.allService;
