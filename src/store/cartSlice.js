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
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === action.payload.name,
      );
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
        state.count -= 1;
      }
    },

    showOrHide: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, showOrHide } = cartSlice.actions;

export default cartSlice.reducer;
