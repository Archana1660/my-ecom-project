import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ProductsDashboardPage } from './components/pages/ProductsDashboardPage';
import { ProductPage } from './components/pages/ProductPage';
import { CartPage } from './components/pages/CartPage';
import { RootLayout } from './components/templates/RootLayout';
import { Provider } from "react-redux"
import store from "./store/store";
import { ErrorPage } from './components/pages/ErrorPage/ErrorPage';
import LoginPage from './components/pages/LoginPage/LoginPage';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage/>}>
        {/*Dashboard is a default component */}
        <Route path="categories" element={<ProductsDashboardPage />}></Route>
        <Route path='cart' element={<CartPage />}></Route>
        <Route path='product/:id' element={<ProductPage />}></Route>
        <Route path='categories/electronics' element={<ProductsDashboardPage category="electronics" />}></Route>
        <Route path='categories/jewelery' element={<ProductsDashboardPage category="jewelery" />}></Route>
        <Route path="categories/men's clothing" element={<ProductsDashboardPage category="men's clothing" />}></Route>
        <Route path="categories/women's clothing" element={<ProductsDashboardPage category="women's clothing" />}></Route>
      </Route>
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
