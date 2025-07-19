import AuthLayout from "../Layouts/AuthLayouts";
import FormLogin from "../Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      description="Welcome, please login to your account to continue."
      type="login"
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
