/** @format */

import { Link, ListItemButton, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/cartReducer';
import { showCart } from '../store/cartReducer';
export default function SimpleCart() {
  const { count, show, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (count === 0) {
      dispatch(showCart('SHOW_OR_HIDE', false));
    } else if (count > 0) {
      dispatch(showCart('SHOW_OR_HIDE', true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleClose = (item) => {
    dispatch(updateCart('REMOVE_FROM_CART', item));
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
