import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dragons: dragonsReducer,
  },
  middleware: [thunk],
});
