import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useLogin();

  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    setTotalCart(cart.length);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");

    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10">
      {username}
      <Button classname="bg-white text-gray-700 ml-5" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-white text-gray-700 ml-5 pl-4 pr-4 p-2 rounded-md ">
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;
