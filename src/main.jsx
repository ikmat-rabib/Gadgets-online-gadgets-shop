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
        loader: () => fetch('https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/brands')
      },
      {
        path: "/brand/:brandName",
        element: <BrandItems></BrandItems>,
        loader: () => fetch('https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/product')
      },
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/product')
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProductPage></AddProductPage></PrivateRoute>,
      },
      {
        path: "/update-product/:id",
        element: <PrivateRoute><UpdateProductPage></UpdateProductPage></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/product/${params.id}`)
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
        loader: () => fetch('https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/cart')
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
