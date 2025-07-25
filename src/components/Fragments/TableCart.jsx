import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../hooks/useTotalPrice";

const TableCart = (props) => {
  const { products } = props;

  const cart = useSelector((state) => state.cart.data);

  const { isDarkMode } = useContext(DarkModeContext);

  const dispatch = useTotalPriceDispatch();
  const totalPrice = useTotalPrice();

  // ComponentDidUpdate pada FunctionalComponent
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        // Temukan dulu Product nya per item
        const product = products.find((product) => product.id === item.id);

        // acc singkatan dari Accumulator
        return acc + product.price * item.qty;
      }, 0);

      // Menggunakan Dispatch untuk update TotalPrice
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });

      // Menyimpan ke LocalStorage, tapi di ubah dulu ke JSON String
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // dibawah adalah Depedency, untuk melihat perubahan pada state 'cart'
  }, [cart, products, dispatch]);

  // Penggunaan useRef, untuk mengakses DOM Element 'totalPrice' ditampilkan ketika ada item di cart
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-7 ${
        isDarkMode ? "text-white" : ""
      }`}
    >
      <thead>
        <tr>
          <th>Id</th>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);

            return (
              <tr key={item.id}>
                <td>{product.id}</td>
                <td>{product.title.substring(0, 20)}</td>
                <td>${product.price}</td>
                <td>{item.qty}</td>
                <td>${product.price * item.qty}</td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={4} className="py-2">
            <b>Total Price</b>
          </td>
          <td>
            <b>${totalPrice.total.toFixed(2)}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
