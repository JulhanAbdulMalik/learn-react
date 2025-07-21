import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../Fragments/CardProduct";
import Button from "../Elements/Button";
import getProducts from "../../services/product.service";

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [products, setProducts] = useState([]);

  // Data dari API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  // ComponentDidMount pada FunctionalComponent
  useEffect(() => {
    // Memanggil data dari LocalStorage dengan nama 'cart'
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // ComponentDidUpdate pada FunctionalComponent
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        // Temukan dulu Product nya per item
        const product = products.find((product) => product.id === item.id);

        // acc singkatan dari Accumulator
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);

      // Menyimpan ke LocalStorage, tapi di ubah dulu ke JSON String
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // dibawah adalah Depedency, untuk melihat perubahan pada state 'cart'
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    window.location.href = "/login";
  };

  const handleAddToCard = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

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
    <Fragment>
      <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10">
        {email}
        <Button classname="bg-white text-gray-700 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-10">
        <div className="w-3/3 flex flex-wrap">
          {
            // Rendering List
            products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header images={product.image} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    onAddToCard={handleAddToCard}
                    id={product.id}
                  />
                </CardProduct>
              ))
          }
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-700 ml-6 mb-2">Card</h1>
          <ul>
            <table className="text-left table-auto border-separate border-spacing-x-7">
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
                    const product = products.find(
                      (product) => product.id === item.id
                    );

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
                    <b>${totalPrice}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
