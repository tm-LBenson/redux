/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('should render without crashing', () => {
    render(<Footer />);
  });

  it('should render the copyright and list items', () => {
    render(<Footer />);

    const copyright = screen.getByTestId('copyright');
    const react = screen.getByTestId('react');
    const redux = screen.getByTestId('redux');
    const mui = screen.getByTestId('mui');
    expect(copyright.textContent).toEqual('© 2023 JavaScript 401');
    expect(react.textContent).toEqual('React');
    expect(redux.textContent).toEqual('Redux');
    expect(mui.textContent).toEqual('Material UI');
  });
});
