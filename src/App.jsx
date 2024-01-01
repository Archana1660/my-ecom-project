import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ProductsDashboardLayout } from './components/pages/ProductsDashboardLayout';
import { ProductDashboard } from './components/pages/ProductDashboard';
import { ProductPage } from './components/pages/ProductPage';
import { CartPage } from './components/pages/CartPage';
import { RootLayout } from './components/templates/RootLayout';
import { Provider } from "react-redux"
import store from "./store/store";
import { ErrorPage } from './components/pages/ErrorPage/ErrorPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { HomePage } from './components/pages/HomePage';

import { getProducts } from './store/ProductDashboardStore/AllProductDashboardSlice';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {/* Specific routes */}
      <Route path="/my-ecom-project/login" element={<LoginPage />} />

      {/* Default routes with 404 catch-all */}
      <Route path="/my-ecom-project/" element={<RootLayout />}>
        {/* Dashboard is a default component */}
        <Route index element={<HomePage />}/>
        <Route path="/my-ecom-project/categories" element={<ProductsDashboardLayout />}>
          <Route path='electronics' element={<ProductDashboard category="electronics" />} loader={getProducts}/>
          <Route path='jewelery' element={<ProductDashboard category="jewelery" />}/>
          <Route path="men's clothing" element={<ProductDashboard category="men's clothing" />}/>
          <Route path="women's clothing" element={<ProductDashboard category="women's clothing" />}/>
        </Route>
        <Route path='/my-ecom-project/cart' element={<CartPage />}/>
        <Route path='/my-ecom-project/product/:id' element={<ProductPage />}/>
      </Route>

      {/* 404 Route - Catch all unmatched routes */}
      <Route path='*' element={<ErrorPage/>}/>
    </>
  ))
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>
  );
}

export default App;
