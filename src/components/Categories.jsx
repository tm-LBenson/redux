/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../store/activeCategoryReducer';

function Categories({ categories, changeCategory }) {
  console.log(categories.activeCategory);
  return (
    <>
      <div>Browse our Categories</div>
      <div>
        <ul>
          <li
            onClick={() => {
              changeCategory('ELECTRONICS');
            }}
          >
            ELECTRONICS
          </li>
          <li
            onClick={() => {
              changeCategory('FOOD');
            }}
          >
            FOOD
          </li>
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
