import CardProduct from "../Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-10">
      <CardProduct>
        <CardProduct.Header imagesName="shoes-1.jpg" />
        <CardProduct.Body title="Nike Air Max 90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          illo eaque, laborum quibusdam soluta nostrum sed iure est a quas
          voluptate obcaecati mollitia fugit earum deserunt cupiditate non
          itaque maiores?
        </CardProduct.Body>
        <CardProduct.Footer price="200" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header imagesName="shoes-1.jpg" />
        <CardProduct.Body title="Nike Air Max 92">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          illo eaque, laborum quibusdam soluta nostrum sed iure est a quas
          voluptate.
        </CardProduct.Body>
        <CardProduct.Footer price="500" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
