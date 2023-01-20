/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  it('should render without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should render the logo and cart button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    const heading = screen.getByTestId('test-logo');

    expect(heading.textContent).toEqual("Benson's Store");
  });
});
