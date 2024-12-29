import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  band: "",
  dial: "",
  collection: 0,
  sideview: "",
  isSideView: false,
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
    saveSideview: (state, action) => {
      state.sideview = action.payload;
    },
    saveIsSideview: (state, action) => {
      state.isSideView = action.payload;
    },
  },
});

export const { saveBand, saveDial, saveCollection, saveSideview, saveIsSideview } = studioSlice.actions;

export default studioSlice.reducer;
