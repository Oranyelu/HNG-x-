import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shipping from "./pages/Shipping.jsx";
import Product from "./pages/Product.jsx";
import Payment from "./pages/Payment.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  { path: "/confirmation", element: <Confirmation /> },
  { path: "/payment", element: <Payment /> },
  { path: "/product", element: <Product /> },
  { path: "/shipping", element: <Shipping /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
