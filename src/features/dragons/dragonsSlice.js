import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dragons: [],
};

export const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    createDragon: (state, action) => {
      const dragons = [...state.dragons];
      dragons.push(action.payload);
      state.dragons = dragons;
    },

    deleteDragon: (state, action) => {
      const dragons = [...state.dragons];
    },
  },
  extraReducers: {},
});

export const { createDragon, getDragons, deleteDragon } = dragonsSlice.actions;

export const selectDragons = (state) => state.dragons;

export default dragonsSlice.reducer;
