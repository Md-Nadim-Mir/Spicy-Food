import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./assets/Components/Root";
import Home from "./assets/Components/Home";
import ErrorPage from "./assets/Components/ErrorPage";
import Add_Product from "./assets/Components/Add_Product";
import Cart from "./assets/Components/Cart";
import Register from "./assets/Components/Register";
import Login from "./assets/Components/Login";
import AuthtProvider from "./assets/Components/AuthProvider";
import PrivateRoute from "./assets/Components/PrivateRoute";

import Details from "./assets/Components/Details";
import Update from "./assets/Components/Update";
import Brand_Details from "./assets/Components/Brand_Details";





const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add_product',
        element: <PrivateRoute><Add_Product></Add_Product></PrivateRoute>
      },
      {
        path: '/cart',
        loader: () => fetch('https://spicy-food.vercel.app/cart'),
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },


      {
        path: '/food/:brand',
        element: <Brand_Details></Brand_Details>,
        loader: ({ params }) => (`https://spicy-food.vercel.app/food/${params.brand}`)

      },


      {

        path: '/food/:brand/:id',
        loader: ({ params }) => fetch(`https://spicy-food.vercel.app/food/${params.brand}/${params.id}`),
        element: <PrivateRoute><Details></Details></PrivateRoute>

      },

      {
        path: '/update/:brand/:id',
        loader: ({ params }) => fetch(`https://spicy-food.vercel.app/food/${params.brand}/${params.id}`),
        element: <PrivateRoute><Update></Update></PrivateRoute>

      }






    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <div className="">

    <React.StrictMode>
      <AuthtProvider>
        <RouterProvider router={router} />
      </AuthtProvider>
    </React.StrictMode>

  </div>

);