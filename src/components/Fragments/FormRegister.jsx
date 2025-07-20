import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="your fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirm-password"
        placeholder="**************"
      />
      <Button classname="w-full bg-gray-700 text-white">Register</Button>
    </form>
  );
};

export default FormRegister;
