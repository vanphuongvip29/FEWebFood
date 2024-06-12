import axios from "axios";

export let endpoints = {
  categorys: "categorys/",
  foods: "foods/",
  foodId: (fId) => `/foods/${fId}/`,
  fooddetail: (foodId) => `/foods/${foodId}/food_fooddetail/`,
};

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
