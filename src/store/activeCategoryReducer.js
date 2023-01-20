/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { changeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
