/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  count: 0,
  show: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.includes(action.payload)) {
        return;
      }

      state.cart.push(action.payload);
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const { item } = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem !== item);
      state.count -= 1;
    },
    showOrHide: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, showOrHide } = cartSlice.actions;

export default cartSlice.reducer;
