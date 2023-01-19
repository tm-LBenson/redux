/** @format */

import axios from 'axios';
import { updateProdState } from '../productsReducer';

export const updateProducts = (action, product) => async (dispatch) => {
  if (action === 'DEC') product.inStock = product.inStock - 1;
  if (action === 'INC') product.inStock = product.inStock + 1;
  const { _id } = product;
  let body = {
    ...product,
  };

  const updated = await axios.put(
    `https://api-js401.herokuapp.com/api/v1/products/${_id}`,
    body,
  );

  dispatch(updateProdState(updated.data, 'UPDATE_PRODUCTS'));
};
