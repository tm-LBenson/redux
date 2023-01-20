/** @format */

import { configureStore } from '@reduxjs/toolkit';
import activeCategoriesReducer from './activeCategoryReducer';
import categoriesReducer from './categoryReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    activeCategory: activeCategoriesReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
