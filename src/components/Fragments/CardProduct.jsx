import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-85 bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ images }) => {
  return (
    <a href="#">
      <img
        src={images}
        alt="product"
        className="p-6 rounded-t-lg w-full object-cover h-70"
      />
    </a>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="px-6 pb-6 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = ({ price, onAddToCard, id }) => {
  return (
    <div className="flex items-center justify-between px-6 pb-6">
      <span className="text-xl font-semibold text-white">${price}</span>
      <Button
        classname="bg-blue-600 text-white"
        onClick={() => onAddToCard(id)}
      >
        Add to cart
      </Button>
    </div>
  );
};

// Nested Component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
