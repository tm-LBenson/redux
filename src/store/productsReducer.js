/** @format */

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, item } = action;
  switch (type) {
    case 'ADD_CART':
      return {
        ...state,
        cart: item,
      };
    default:
      return state;
  }
};

export const addCart = (item) => {
  return {
    type: 'ADD_CART',
    item,
  };
};

export default productsReducer;
