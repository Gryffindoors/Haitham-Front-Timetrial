import axios from "axios";

const api = axios.create({
  baseURL: "https://faux-api.com/api/v1/"
});

export default api;
