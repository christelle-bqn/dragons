import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dragonsReducer from "../features/dragons/dragonsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dragons: dragonsReducer,
  },
});
