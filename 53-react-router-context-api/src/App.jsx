import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Products from './pages/products/Products';
import SingleProduct from './pages/products/SingleProduct';
//layouts
import DefaultLayout from './layouts/DefaultLayout';
//context
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/products" Component={Products} />
            <Route path="/products/:id" Component={SingleProduct} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
