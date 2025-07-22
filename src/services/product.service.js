import axios from "axios";

export const API_URL = "https://fakestoreapi.com/";

const getProducts = (callback) => {
  axios
    .get(API_URL + "products")
    .then((response) => callback(response.data))
    .catch((error) => console.log(error));
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(API_URL + `products/${id}`)
    .then((response) => callback(response.data))
    .catch((error) => console.log(error));
};

export default getProducts;
