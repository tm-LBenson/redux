/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProdState: (state, action) => {
      // state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { setProducts, updateProdState } = productsSlice.actions;

export default productsSlice.reducer;
