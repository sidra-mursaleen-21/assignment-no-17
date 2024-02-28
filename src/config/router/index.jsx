import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Products from "../../pages/products";
import Productdetail from "../../pages/produtDetail";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/productDetail/:id",
    element: <Productdetail />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
