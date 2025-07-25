import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkMode";
import { useTotalPrice } from "../../hooks/useTotalPrice";

const Navbar = () => {
  const username = useLogin();

  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const totalPrice = useTotalPrice();

  useEffect(() => {
    setTotalCart(cart.length);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10">
      {username}
      <div className="flex items-center bg-white text-gray-700 ml-5 pl-4 pr-4 p-2 rounded-md ">
        Item: {totalCart} | Price: ${totalPrice.total.toFixed(2)}
      </div>
      <Button classname="bg-white text-gray-700 ml-5" onClick={handleLogout}>
        Logout
      </Button>
      <button
        className="top-5 right-5 bg-white text-gray-700 p-2 rounded ml-5"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Navbar;
