/** @format */
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import StoreFront from './components/StoreFront';

import './sass/main.scss';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories />
              <Products />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <ShoppingCart />
            </>
          }
        />
        <Route
          path=":itemId"
          element={
            <>
              <StoreFront />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
