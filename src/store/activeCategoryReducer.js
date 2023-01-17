/** @format */

const initialState = {
  activeCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  const { type, category } = action;
  switch (type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        activeCategory: category,
      };
    default:
      return state;
  }
};

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    category,
  };
};

export default categoriesReducer;
