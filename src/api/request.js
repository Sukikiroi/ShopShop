import { axiosInstance } from "./config";

export const getProductRequest = () => {
  return axiosInstance.get("/product");
};

export const getCategoryRequest = () => {
  return axiosInstance.get("/category");
};
