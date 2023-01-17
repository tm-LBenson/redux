/** @format */

import { Provider } from 'react-redux';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import store from './store/store';
function App() {
  return (
    <Provider store={store()}>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </Provider>
  );
}

export default App;
