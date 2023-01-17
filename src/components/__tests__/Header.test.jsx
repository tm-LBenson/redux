/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('should render without crashing', () => {
    render(<Header />);
  });

  it('should render the logo and cart button', () => {
    render(<Header />);

    const heading = screen.getByTestId('test-logo');
    const cart = screen.getByTestId('test-cart');
    expect(heading.textContent).toEqual("Benson's Store");
    expect(cart.textContent).toEqual('Cart (0)');
  });
});
