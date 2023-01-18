/** @format */

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Products from '../Products';

describe('Products component', () => {
  test('Should render the component without crashing', () => {
    render(
      <Provider store={store()}>
        <Products />
      </Provider>,
    );
  });
});
