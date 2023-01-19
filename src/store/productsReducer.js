/** @format */

const initialState = [
  { name: 'TV', category: 'electronics', price: 699.0, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.0, inStock: 15 },
  { name: 'Shirt', category: 'clothing', price: 9.0, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.0, inStock: 10 },
  { name: 'Apples', category: 'food', price: 0.99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

const productsReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_PRODUCTS':
      return data;
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
