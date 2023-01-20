/** @format */

import { Link, ListItemButton, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, showOrHide } from '../store/cartSlice';

import { updateProducts } from '../store/middleware/updateInventory';
export default function SimpleCart() {
  const { count, cart, show } = useSelector((state) => state.cart);

  console.log(show);
  const dispatch = useDispatch();
  useEffect(() => {
    if (count === 0) {
      dispatch(showOrHide('SHOW_OR_HIDE', false));
    } else if (count > 0) {
      dispatch(showOrHide('SHOW_OR_HIDE', true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleClose = (item) => {
    dispatch(removeFromCart('REMOVE_FROM_CART', item));
    dispatch(updateProducts('INC', item));
  };
  return (
    <>
      <div className="navbar__cart">
        <ListItemButton data-testid="test-cart">Cart ({count})</ListItemButton>
      </div>
      {count && show ? (
        <div className="cart">
          <Paper className="cart__items">
            <ul>
              <li>item</li>
              {cart.map((item) => (
                <li
                  key={item + Date.now()}
                  className="cart__items--item"
                >
                  <Link underline="hover">{item}</Link>
                  <span
                    onClick={() => handleClose(item)}
                    className="cart__close"
                  >
                    x
                  </span>
                </li>
              ))}
            </ul>
          </Paper>
        </div>
      ) : null}
    </>
  );
}
