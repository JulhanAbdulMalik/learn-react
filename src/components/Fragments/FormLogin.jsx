import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useState, useEffect, useRef } from "react";
import login from "../../services/auth.service";

const FormLogin = () => {
  const [loginField, setLoginField] = useState("");

  const onHandleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginField(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={onHandleLogin}>
      <InputForm
        label="Username"
        type="username"
        name="username"
        placeholder="John Doe"
        ref={usernameRef}
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
      {loginField !== "" && (
        <p className="text-red-500 text-center mt-3">{loginField}</p>
      )}
    </form>
  );
};

export default FormLogin;
