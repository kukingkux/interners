import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "https://idealibs.cyclic.app",
	baseURL: "https://b29b-2a09-bac5-3a2a-137d-00-1f1-1bd.ngrok-free.app",
	headers: {
		"Content-Type": "application/json",
		"ngrok-skip-browser-warning": "64920",
	},
});

export default axiosInstance;