import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  band: "",
  dial: "",
  collection: "",
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
    saveCollection: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export const { saveBand, saveDial, saveCollection } = studioSlice.actions;

export default studioSlice.reducer;
