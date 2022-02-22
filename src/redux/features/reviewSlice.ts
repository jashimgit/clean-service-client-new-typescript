import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../interfaces/interfaces";
import { RootState } from "../store";

interface ReviewState {
  allReviews: IReview[];
}

// define initial state

const initialState: ReviewState = {
  allReviews: [],
};

// define reviewSlice

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.allReviews = action.payload;
    },
  },
});

export const { setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;

export const getAllReviews = (state: RootState) => state.reviews.allReviews;
