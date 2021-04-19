import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";

const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 400) {
          return error.response.message || "You dont have authorized to access this page"
      }

      return Promise.reject(error.response);
  
    }
  }
);

export function getResponse(response) {
  return response.data;
}

export default request;