import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IService } from "./../../../interfaces/interfaces";

// define initial state Types
interface ServiceState {
  allService: IService[];
}

//  define initial state
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
