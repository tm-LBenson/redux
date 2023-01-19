/** @format */

const initialState = [];

const productsReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_PRODUCTS':
      console.log(data);
      return data;
    case 'UPDATE_PRODUCTS':
      return [...state];
    default:
      return state;
  }
};

export default productsReducer;

export const setProducts = (data, type) => {
  return {
    type,
    data,
  };
};

export const updateProdState = (data, type) => {
  return {
    type,
    data,
  };
};
