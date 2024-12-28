import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  band: "",
  dial: "",
};

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    saveBand: (state, action) => {
      state.band = action.payload;
    },
    saveDial: (state, action) => {
      state.dial = action.payload;
    },
  },
});

export const { saveBand, saveDial } = studioSlice.actions;

export default studioSlice.reducer;
