/** @format */

import Products from '../Products';
import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import productsReducer from '../../store/productsReducer';
import activeCategoriesReducer from '../../store/activeCategoryReducer';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';

describe('Products', () => {
  const reducers = combineReducers({
    products: productsReducer,
    activeCategory: activeCategoriesReducer,
  });

  const store = createStore(reducers, applyMiddleware(thunk));

  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>,
    );
  });
});
