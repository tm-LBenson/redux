/** @format */

import { Card, Grid, ListItem } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
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
            rowSpacing="1"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {activeProducts.map((item, idx) => (
              <Grid
                key={idx}
                item
                xs={6}
              >
                <Card variant="outlined">
                  <ListItem>{item.name}</ListItem>
                </Card>
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
