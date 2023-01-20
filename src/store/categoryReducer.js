/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
    getCategories: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { setCategories, getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
