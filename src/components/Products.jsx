/** @format */

import { Card } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
function Products({ products, activeCategory }) {
  const activeProducts = products.products.filter(
    (item) => item.category.toUpperCase() === activeCategory.activeCategory,
  );
  return (
    <ul>
      {activeProducts.map((item, idx) => (
       <li key={idx}>  <Card variant="outlined">{item.name}</Card></li>
       
      ))}
    </ul>
  );
}

const mapStateToProps = ({ products, activeCategory }) => {
  return {
    products,
    activeCategory,
  };
};

export default connect(mapStateToProps)(Products);
