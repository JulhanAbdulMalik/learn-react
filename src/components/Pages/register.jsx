import AuthLayout from "../Layouts/AuthLayouts";
import FormRegister from "../Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register"
      description="Welcome, please register to your account to continue."
      type="register"
    >
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
