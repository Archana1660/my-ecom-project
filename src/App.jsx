import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux"

import './App.css';

import { RootLayout } from './components/templates/RootLayout';
import { ProductsDashboardLayout } from './components/pages/ProductsDashboardLayout';

import { ProductDashboard } from './components/pages/ProductDashboard';

import LoginPage from './components/pages/LoginPage/LoginPage';
import { HomePage } from './components/pages/HomePage';
import { ProductPage } from './components/pages/ProductPage';
import { CartPage } from './components/pages/CartPage';
import { ErrorPage } from './components/pages/ErrorPage/ErrorPage';
import store from "./store/store";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {/* Specific routes */}
      <Route path="/my-ecom-project/login" element={<LoginPage />} />

      {/* Default routes with 404 catch-all */}
      <Route path="/my-ecom-project/" element={<RootLayout />}>
        {/* Dashboard is a default component */}
        <Route index element={<HomePage />}/>
        <Route path="categories" element={<ProductsDashboardLayout />}>
          <Route path=':id' element={<ProductDashboard />}/>
        </Route>
        <Route path='cart' element={<CartPage />}/>
        <Route path='product/:id' element={<ProductPage />}/>
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
