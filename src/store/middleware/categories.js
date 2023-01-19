/** @format */

import axios from 'axios';
import { setCategories } from '../categoryReducer';

export const getCategories = () => async (dispatch) => {
  let response = await axios.get(
    'https://api-js401.herokuapp.com/api/v1/categories',
  );

  dispatch(setCategories(response.data.results, 'SET_CATEGORIES'));
};
