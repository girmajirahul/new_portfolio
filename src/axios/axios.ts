import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://blog-backend-rho-one.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosInstance;