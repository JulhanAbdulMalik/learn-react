import axios from "axios";

const API_URL = "https://fakestoreapi.com/";

const getProducts = (callback) => {
  axios
    .get(API_URL + "products")
    .then((response) => callback(response.data))
    .catch((error) => console.log(error));
};

export default getProducts;
