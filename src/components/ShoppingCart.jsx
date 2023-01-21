/** @format */

import { Button, Card, TextField } from '@mui/material';
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
        <div className="shopping-cart__block">
          <h5 className="shopping-cart__form-title">Billing Address</h5>
          <div className="shopping-cart__form-group">
            <TextField
              id="full-name"
              label="Full Name"
              variant="standard"
              name="fullName"
            />

            <TextField
              id="address"
              label="Address"
              variant="standard"
              name="address"
            />

            <TextField
              id="city"
              label="City"
              variant="standard"
              name="city"
            />

            <TextField
              id="state"
              label="State"
              variant="standard"
              name="state"
            />

            <TextField
              id="zip"
              label="Zip"
              variant="standard"
              name="zip"
            />
          </div>
        </div>
        <div className="shopping-cart__block">
          <h5>Payment Details</h5>
          <div className="shopping-cart__form-group">
            <TextField
              id="ccnum"
              label="Credit Card #"
              variant="standard"
              name="cardNumber"
            />

            <TextField
              id="exp"
              variant="standard"
              name="expiration"
              type="date"
            />

            <TextField
              id="cvv"
              label="CVV"
              variant="standard"
              name="cardNumber"
            />
          </div>
        </div>
      </form>
      <Button
        className="shopping-cart__button"
        variant="contained"
      >
        PLACE YOUR ORDER
      </Button>
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
