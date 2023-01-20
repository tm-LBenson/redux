/** @format */

import { Card } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Card className="shopping-cart">
      <h3 className="shopping-cart__title">Order summary</h3>
      <table className="shopping-cart__table">
        <thead>
          <tr className="shopping-cart__table-head">
            <th className="shopping-cart__table-head-cell">Name</th>
            <th className="shopping-cart__table-head-cell">Price</th>
          </tr>
        </thead>
        <tbody className="shopping-cart__table-body">
          {cart.map((item, idx) => (
            <tr
              key={idx}
              className="shopping-cart__table-row"
            >
              <td className="shopping-cart__table-cell">{item.name}</td>
              <td className="shopping-cart__table-cell">{item.price}</td>
            </tr>
          ))}
          <tr className="shopping-cart__table-row--total">
            <td className="shopping-cart__table-cell">
              <strong>Total</strong>
            </td>
            <td className="shopping-cart__table-cell">{total}</td>
          </tr>
        </tbody>
      </table>
      <form className="shopping-cart__form">
        <h3 className="shopping-cart__form-title">Billing Address</h3>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            Address:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="address"
            />
          </label>
        </div>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            City:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="city"
            />
          </label>
        </div>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            State:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="state"
            />
          </label>
        </div>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            Zip:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="zip"
            />
          </label>
        </div>
        <h3>Credit Card</h3>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            Card Number:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="cardNumber"
            />
          </label>
        </div>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            Expiration Date:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="expirationDate"
            />
          </label>
        </div>
        <div className="shopping-cart__form-group">
          <label className="shopping-cart__form-label">
            CVV:
            <input
              className="shopping-cart__form-input"
              type="text"
              name="cvv"
            />
          </label>
        </div>
      </form>
      {cart.length === 0 ? (
        <Navigate
          to="/"
          replace={true}
        />
      ) : null}
    </Card>
  );
}
export default ShoppingCart;
