import AuthLayout from "../Layouts/AuthLayouts";
import FormRegister from "../Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register"
      deskription="Welcome, please register to your account to continue."
    >
      <FormRegister />
      <p className="text-gray-500 text-center mt-5">
        Have an account?{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
