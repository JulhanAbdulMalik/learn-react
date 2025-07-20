import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ imagesName }) => {
  return (
    <a href="">
      <img
        src={"/images/" + imagesName}
        alt="product"
        className="p-8 rounded-t-lg"
      />
    </a>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-semibold text-white">${price}</span>
      <Button classname="bg-blue-500">Add to cart</Button>
    </div>
  );
};

// Nested Component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
