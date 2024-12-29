import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import studioSlice  from "./slices/studio";

const reducers = combineReducers({
  studio: studioSlice,
});

const persistConfig = {
  key: "root",
  storage,
  //  In white list we will put the reducer name of those who we want to keep persist
  whitelist: ["studio"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
