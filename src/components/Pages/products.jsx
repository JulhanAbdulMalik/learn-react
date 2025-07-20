import { Fragment } from "react";
import CardProduct from "../Fragments/CardProduct";
import Button from "../Elements/Button";

const products = [
  {
    id: 1,
    name: "Nike Air Max 90",
    imagesName: "shoes-1.jpg",
    price: 100,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          illo eaque, laborum quibusdam soluta nostrum sed iure est a quas
          voluptate obcaecati mollitia fugit earum deserunt cupiditate non
          itaque maiores?`,
  },
  {
    id: 2,
    name: "Nike Air Max 270",
    imagesName: "shoes-1.jpg",
    price: 200,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          illo eaque.`,
  },
  {
    id: 3,
    name: "Nike Air Max 720",
    imagesName: "shoes-1.jpg",
    price: 80,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          illo eaque, laborum quibusdam soluta nostrum sed iure est a quas
          voluptate obcaecati mollitia.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const onHandleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10">
        {email}
        <Button
          classname="bg-white text-gray-700 ml-5"
          onClick={onHandleLogout}
        >
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-10">
        {
          // Rendering List
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header imagesName={product.imagesName} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))
        }
      </div>
    </Fragment>
  );
};

export default ProductPage;
