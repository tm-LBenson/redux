/** @format */
import { Route, Routes, useParams } from 'react-router-dom';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import './sass/main.scss';
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Categories />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <ShoppingCart />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
