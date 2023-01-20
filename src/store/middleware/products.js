/** @format */

import axios from 'axios';
import { setProducts } from '../productsReducer';

export const getProducts = () => async (dispatch) => {
  let response = await axios.get(
    'https://api-js401.herokuapp.com/api/v1/products',
  );

  dispatch(setProducts(response.data.results));
};
