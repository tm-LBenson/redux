/** @format */

import { Card, CardMedia, Grid, ListItem } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import image from '../images/placeholder.jpg';
function Products({ products, activeCategory }) {
  const activeProducts = products.products.filter(
    (item) => item.category.toUpperCase() === activeCategory.activeCategory,
  );
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
