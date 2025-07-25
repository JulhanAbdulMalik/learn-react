import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profiles";
import DetailProductPage from "./pages/detailProduct";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Context
import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPriceContext";

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
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
