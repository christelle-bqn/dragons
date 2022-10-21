import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./dragonsAPI";

const initialState = {
  dragons: [],
  nbDragons: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    createDragon: (state, action) => {
      const dragons = [...state.dragons];
      dragons.push(action.payload);
      state.dragons = dragons;
    },

    updateDragon: (state, action) => {
      const dragons = [...state.dragons];
      const index = dragons.findIndex(
        (dragon) => dragon.id === action.payload.dragon.id
      );

      dragons.splice(index, 1, {
        id: action.payload.dragon.id,
        name: action.payload.updateValues.name,
        old: action.payload.updateValues.old,
      });

      state.dragons = dragons;
    },

    deleteDragon: (state, action) => {
      const dragons = [...state.dragons];
      const index = dragons.findIndex((dragon) => dragon.id === action.payload);
      dragons.splice(index, 1);
      state.dragons = dragons;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.nbDragons += action.payload;
      });
  },
});

export const { createDragon, updateDragon, deleteDragon } =
  dragonsSlice.actions;

export const selectDragons = (state) => state.dragons.dragons;

export const selectNbDragons = (state) => state.dragons.nbDragons;

export default dragonsSlice.reducer;
