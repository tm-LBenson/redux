/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return [...action.payload];
    },
    updateProdState: (state, action) => {
      // state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { setProducts, updateProdState } = productsSlice.actions;

export default productsSlice.reducer;
