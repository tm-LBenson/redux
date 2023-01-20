/** @format */

import { Card, CardMedia, Grid, ListItem, ListItemButton } from '@mui/material';
import React, { useEffect } from 'react';

import image from '../images/placeholder.jpg';
import { addToCart, showOrHide } from '../store/cartSlice';
import { getCategories } from '../store/middleware/categories';
import { updateProducts } from '../store/middleware/updateInventory';
import { getProducts } from '../store/middleware/products';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Products() {
  const { count, products, activeCategory } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (count === 0) {
      dispatch(showOrHide(false));
    } else if (count > 0) {
      dispatch(showOrHide(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const activeProducts = products.products.filter(
    (item) => item.category.toUpperCase() === activeCategory.activeCategory,
  );

  function handleAddItem(item) {
    dispatch(addToCart(item));
    dispatch(updateProducts('DEC', item));
  }
  return (
    <>
      <main className="main">
        <h1>{activeCategory.activeCategory}</h1>
        {activeCategory.activeCategory && (
          <h4>Category Description Goes Here</h4>
        )}
        <ul className="products">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            rowSpacing="30"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {activeProducts.map((item, idx) => (
              <Grid
                width="100"
                key={idx}
                item
                xs={6}
              >
                <div className="products__items">
                  <Card variant="outlined">
                    <CardMedia
                      component="img"
                      alt="item.name"
                      height="180"
                      image={image}
                    />
                    <ListItem>{item.name}</ListItem>
                    <div className="products__links">
                      <ListItemButton
                        onClick={() => handleAddItem(item)}
                        underline="none"
                      >
                        ADD TO CART
                      </ListItemButton>
                      <ListItemButton underline="none">
                        <Link to={item._id}>VIEW DETAILS</Link>
                      </ListItemButton>
                    </div>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </ul>
      </main>
    </>
  );
}

export default Products;
