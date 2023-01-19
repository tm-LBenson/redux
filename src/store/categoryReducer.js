/** @format */

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'SET_CATEGORIES':
      return [...data];
    case 'GET_CATEGORIES':
      return [...state, data];
    default:
      return state;
  }
};

export const setCategories = (data, type) => {
  return {
    type,
    data,
  };
};

export default categoriesReducer;
