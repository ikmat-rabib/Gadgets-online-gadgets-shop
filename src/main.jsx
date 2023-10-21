import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage.jsx';
import AddProductPage from './Pages/AddProductPage/AddProductPage';
import UpdateProductPage from './Pages/UpdateProductPage/UpdateProductPage';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Cart from './Pages/Cart/Cart';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import BrandItems from './Pages/BrandItems/BrandItems';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Providers/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/brand/:brandName",
        element: <BrandItems></BrandItems>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProductPage></AddProductPage></PrivateRoute>,
      },
      {
        path: "/update-product",
        element: <PrivateRoute><UpdateProductPage></UpdateProductPage></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
    ],
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
