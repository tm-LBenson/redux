/** @format */

import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import activeCategoriesReducer from './activeCategoryReducer';

let reducers = combineReducers({
  categories: activeCategoriesReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}
