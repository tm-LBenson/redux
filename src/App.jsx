/** @format */
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

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
      </Routes>
    </>
  );
}

export default App;
