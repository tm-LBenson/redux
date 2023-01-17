/** @format */

const initialState = {
  categories: [],
  activeCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  const { type, category } = action;
  switch (type) {
    case 'CHANGE_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: category,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
