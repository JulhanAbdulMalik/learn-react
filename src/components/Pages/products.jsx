import CardProduct from "../Fragments/CardProduct";

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

const ProductPage = () => {
  return (
    <div className="flex justify-center py-10">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header imagesName={product.imagesName} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
