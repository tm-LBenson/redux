/** @format */

const initialState = {
  categories: [
    {}
  ],
};

const categoriesReducer = (state = initialState, action) => {
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

export const categoriesAction = (action) => {
  return {
    type: 'ACTION',
    action,
  };
};

export default categoriesReducer;
