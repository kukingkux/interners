import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    // "ngrok-skip-browser-warning": "64920",
  },
  withCredentials: true,
});

export default axiosInstance;
