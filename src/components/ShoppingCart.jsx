/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <h3>Order summary</h3>;
      <ul>
        {cart.map((item, idx) => {
          return <li key={idx}>{item.name}</li>
        })}
      </ul>
    </>
  );
}
export default ShoppingCart;
