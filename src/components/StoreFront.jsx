/** @format */

import { Card, CardMedia, ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import image from '../images/placeholder.jpg';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { updateProducts } from '../store/middleware/updateInventory';
import { useSelector } from 'react-redux';

function StoreFront() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  function handleAddItem(item) {
    dispatch(addToCart(item));
    dispatch(updateProducts('DEC', item));
  }
  const { itemId } = useParams();
  const filtered = products.products.filter((item) => item._id === itemId);
  const item = filtered[0];
  return (
    <div className="item">
      <Card variant="outlined">
        <CardMedia
          component="img"
          alt="item.name"
          height="180"
          image={image}
        />
        <ListItem>{item?.name}</ListItem>
        <div className="products__links">
          <ListItemButton
            onClick={() => handleAddItem(item)}
            underline="none"
          >
            ADD TO CART
          </ListItemButton>
          <ListItemButton underline="none">
            <Link to={item?._id}>VIEW DETAILS</Link>
          </ListItemButton>
        </div>
      </Card>
    </div>
  );
}

export default StoreFront;
