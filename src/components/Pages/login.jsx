import AuthLayout from "../Layouts/AuthLayouts";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      deskription="Welcome, please login to your account to continue."
    >
      <FormLogin />
      <p className="text-gray-500 text-center mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 font-bold">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
