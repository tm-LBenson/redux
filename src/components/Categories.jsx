/** @format */

import { ListItemButton } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../store/activeCategoryReducer';
function Categories({ categories, changeCategory }) {

  return (
    <nav>
      <h3>Browse our Categories</h3>
      <div>
        <ul className="categories">
          {categories.map((item, idx) => (
            <li
              className="categories__item"
              onClick={() => changeCategory(item.name.toUpperCase())}
              key={item.name + idx}
            >
              <ListItemButton underline="none">{item.name}</ListItemButton>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories,
  };
};

const mapDispatchToProps = {
  changeCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
