/** @format */

import { Card, CardMedia, Grid, ListItem, ListItemButton } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import image from '../images/placeholder.jpg';
import { updateCart } from '../store/cartReducer';
import { getCategories } from '../store/middleware/categories';
import { getProducts } from '../store/middleware/products';
import { updateProducts } from '../store/middleware/updateInventory';

function Products({ products, activeCategory }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeProducts = products.filter(
    (item) => item.category.toUpperCase() === activeCategory.activeCategory,
  );

  function handleAddItem(item) {
    const { name } = item;
    dispatch(updateCart('ADD_TO_CART', name));
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
                        VIEW DETAILS
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

const mapStateToProps = ({ products, activeCategory }) => {
  return {
    products,
    activeCategory,
  };
};

export default connect(mapStateToProps)(Products);
