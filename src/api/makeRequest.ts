import axios from "axios";

const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_FIREBASE_URL as string,
});

makeRequest.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    console.error("error", error);
    return Promise.reject(error);
  }
);

makeRequest.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    console.error("error", error);
    return Promise.reject(error);
  }
);

export default makeRequest;
