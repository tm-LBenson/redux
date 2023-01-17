/** @format */

const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, item } = action;
  switch (type) {
    case 'ACTION':
      return {
        ...state,
        task: item,
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
