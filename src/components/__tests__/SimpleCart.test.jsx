/** @format */

import SimpleCart from '../SimpleCart';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import cartSlice from '../../store/cartSlice';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('SimpleCart Reducer', () => {
  const reducers = combineReducers({
    cart: cartSlice,
  });

  const store = createStore(reducers);
  render(
    <Provider store={store}>
      <SimpleCart />
    </Provider>,
  );

  test('delivers initial state', () => {
    let state = store.getState();
    expect(state.cart.count).toEqual(0);

    expect(state.cart.cart.length).toEqual(0);
  });
});
