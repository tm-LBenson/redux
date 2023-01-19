/** @format */

import SimpleCart from '../SimpleCart';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import cartReducer from '../../store/cartReducer';
import { updateCart } from '../../store/cartReducer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('SimpleCart Reducer', () => {
  const reducers = combineReducers({
    cart: cartReducer,
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
    expect(state.cart.show).toEqual(false);
    expect(state.cart.cart.length).toEqual(0);
  });

  test('removes item from cart', () => {
    store.dispatch(updateCart('ADD_TO_CART', 'item1'));
    store.dispatch(updateCart('ADD_TO_CART', 'item2'));
    let state = store.getState();
    let { cart } = state.cart;

    store.dispatch(updateCart('REMOVE_FROM_CART', cart[1]));
    let newState = store.getState();

    expect(newState.cart.count).toEqual(1);
    expect(newState.cart.cart[0]).toEqual('item1');
  });
});
