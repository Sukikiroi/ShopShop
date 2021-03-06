import axios from "axios";

export const baseUrl = "http://localhost:5000";

// axios Instance
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "Yon");
  }
);

export { axiosInstance };
