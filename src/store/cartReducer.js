/** @format */

const initialState = {
  cart: [],
  count: 0,
  show: false,
};

function cartReducer(state = initialState, action) {
  const { type, showOrHide, item } = action;

  switch (type) {
    case 'ADD_TO_CART':
      if (state.cart.includes(item)) {
        return { ...state };
      }
      item && state.cart.push(item);
      return {
        ...state,
        count: state.count + 1,
      };
    case 'REMOVE_FROM_CART':
      const updated = state.cart.filter((cartItem) => cartItem !== item);
      return {
        ...state,
        cart: updated,
        count: state.count - 1,
      };
    case 'SHOW_OR_HIDE':
      return {
        ...state,
        show: showOrHide,
      };
    default:
      return state;
  }
}

export const updateCart = (action, item = null) => {
  return { type: action, item };
};

export const showCart = (action, showOrHide) => {
  return { type: action, showOrHide };
};

export default cartReducer;
