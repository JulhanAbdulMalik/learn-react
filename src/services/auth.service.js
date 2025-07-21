import axios from "axios";
import { API_URL } from "./product.service";
import { jwtDecode } from "jwt-decode";

const login = (data, callback) => {
  axios
    .post(API_URL + "auth/login", data)
    .then((res) => callback(true, res.data.token))
    .catch((error) => callback(false, error));
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};

export default login;
