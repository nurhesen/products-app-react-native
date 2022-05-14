import axios from "axios";

const getProducts = () => {
  const configs = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return axios
    .get(
      "https://raw.githubusercontent.com/nurhesen/api/master/products/products.json",
      configs
    )
    .then((data) => {
      return data.data;
    });
};
const getProductsDetail = (id) => {
  const configs = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return axios
    .get(
      `https://raw.githubusercontent.com/nurhesen/api/master/products/${id}/product.json`,
      configs
    )
    .then((data) => {
      return data.data;
    });
};

export { getProducts, getProductsDetail };
