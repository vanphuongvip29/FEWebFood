import axios from "axios";
import cookies from "react-cookies";

export let endpoints = {
  categorys: "categorys/",
  foods: "foods/",
  foodId: (fId) => `/foods/${fId}/`,
  fooddetail: (foodId) => `/foods/${foodId}/food_fooddetail/`,
  // Lấy token
  login: "/o/token/",
  "current-user": "/users/current-user/",
};
export let AuthAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Authorization: `Bearer ${cookies.load("access_token")}`,
  },
});

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
