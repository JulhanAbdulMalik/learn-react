const Button = (props) => {
  const { children, classname = "bg-gray-700" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${classname}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
