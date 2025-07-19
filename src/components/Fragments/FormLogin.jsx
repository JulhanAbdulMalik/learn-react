import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@main.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="**************"
      />
      <Button classname="w-full bg-gray-700">Login</Button>
    </form>
  );
};

export default FormLogin;
