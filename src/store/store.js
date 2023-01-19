/** @format */

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import activeCategoriesReducer from './activeCategoryReducer';
import categoriesReducer from './categoryReducer';
import productsReducer from './productsReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  activeCategory: activeCategoriesReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
