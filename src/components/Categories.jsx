/** @format */

import { ListItemButton } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../store/activeCategoryReducer';
function Categories({ categories, changeCategory }) {
  return (
    <>
      <div>Browse our Categories</div>
      <div>
        <ul>
          {categories.categories.map((item, idx) => (
            <li
              onClick={() => changeCategory(item.name.toUpperCase())}
              key={item.displayName + idx}
            >
              <ListItemButton
                underline="none"
                component="button"
                variant="body2"
              >
                {item.displayName}
              </ListItemButton>
            </li>
          ))}
        </ul>
      </div>
    </>
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
