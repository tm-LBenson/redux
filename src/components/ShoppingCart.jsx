/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <h3>Order summary</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {cart.length === 0 ? (
        <Navigate
          to="/"
          replace={true}
        />
      ) : null}
    </>
  );
}
export default ShoppingCart;
