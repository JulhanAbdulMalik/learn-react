import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import getProducts from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  // Data dari API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <Fragment>
      <Navbar />

      <div className="flex justify-center py-10">
        <div className="w-3/3 flex flex-wrap">
          {
            // Rendering List
            products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header images={product.image} id={product.id} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              ))
          }
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-700 ml-6 mb-2">Card</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
