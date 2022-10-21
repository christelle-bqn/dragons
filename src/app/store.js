import { configureStore } from "@reduxjs/toolkit";
import dragonsReducer from "../features/dragons/dragonsSlice";

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});
