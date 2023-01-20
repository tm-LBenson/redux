/** @format */

import axios from 'axios';
import { updateProdState } from '../productsReducer';

export const updateProducts = (action, product) => async (dispatch) => {
  let updatedProduct = { ...product }; // create a new object with the same properties as 'product'
  if (action === 'DEC') {
    updatedProduct.inStock = updatedProduct.inStock - 1;
  } else if (action === 'INC') {
    updatedProduct.inStock = updatedProduct.inStock + 1;
  }
  const { _id } = updatedProduct;
  let body = {
    ...updatedProduct,
  };

  const updated = await axios.put(
    `https://api-js401.herokuapp.com/api/v1/products/${_id}`,
    body,
  );

  dispatch(updateProdState(updated.data));
};
