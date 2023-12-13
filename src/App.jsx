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


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage/>}>
        {/*Dashboard is a default component */}
        <Route index element={<HomePage/>}></Route>
        <Route path="categories" element={<ProductsDashboardLayout />}>
          <Route path='electronics' element={<ProductDashboard category="electronics" />}></Route>
          <Route path='jewelery' element={<ProductDashboard category="jewelery" />}></Route>
          <Route path="men's clothing" element={<ProductDashboard category="men's clothing" />}></Route>
          <Route path="women's clothing" element={<ProductDashboard category="women's clothing" />}></Route>
        </Route>
        <Route path='cart' element={<CartPage />}></Route>
        <Route path='product/:id' element={<ProductPage />}></Route>
       
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
