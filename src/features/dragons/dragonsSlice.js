import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createDragon = createAsyncThunk(
  "dragons/createDragon",
  async ({ createDragonData }, { rejectWithValue }) => {
    const response = await createDragon(createDragonData);
    return response.data;
  }
);

const initialState = {
  dragons: [],
};

export const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {},
  extraReducers: {
    [createDragon.pending]: (state, action) => {
      state.loading = true;
    },
    [createDragon.fulfilled]: (state, action) => {
      state.loading = false;
      state.dragons = [action.payload];
    },
    [createDragon.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {} = dragonsSlice.actions;

export const selectDragons = (state) => state.dragons.value;

export default dragonsSlice.reducer;
