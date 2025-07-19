import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, description, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-gray-700">{title}</h1>
        <p className="font-regular text-slate-500 mb-8">{description}</p>
        {children}

        <NavigationConditional type={type} />
      </div>
    </div>
  );
};

// Conditional Rendering
const NavigationConditional = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-gray-500 text-center mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-gray-500 text-center mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
