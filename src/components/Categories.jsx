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
          {categories.categories.map((item, idx) => (
            <li
              className="categories__item"
              onClick={() => changeCategory(item.name.toUpperCase())}
              key={item.displayName + idx}
            >
              <ListItemButton underline="none">
                {item.displayName}
              </ListItemButton>
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
