import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const onHandleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);

    window.location.href = "/products";
  };

  return (
    <form onSubmit={onHandleLogin}>
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
      <Button classname="w-full bg-gray-700 text-white" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
