import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage.jsx';
import AddProductPage from './Pages/AddProductPage/AddProductPage';
import UpdateProductPage from './Pages/UpdateProductPage/UpdateProductPage';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Cart from './Pages/Cart/Cart';
import ErrorPage from './Pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/add-product",
        element: <AddProductPage></AddProductPage>,
      },
      {
        path: "/update-product",
        element: <UpdateProductPage></UpdateProductPage>,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
 
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
