import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/Pages/login";
import RegisterPage from "./components/Pages/register";
import ErrorPage from "./components/Pages/404";
import ProductPage from "./components/Pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center min-h-screen items-center flex-col">
        Hello World!
        <a href="/login" className="text-blue-500 font-bold text-3xl">
          Login
        </a>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
