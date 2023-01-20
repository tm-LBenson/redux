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
      const { item } = action.payload;
      if (state.cart.includes(item)) {
        return;
      }

      state.cart.push(item);
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const { item } = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem !== item);
      state.count -= 1;
    },
    showOrHide: (state, action) => {
      console.log(action.payload);
      state.show = action.payload.showOrHide;
    },
  },
});

export const { addToCart, removeFromCart, showOrHide } = cartSlice.actions;

export default cartSlice.reducer;
