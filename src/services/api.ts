import axios from "axios";

const api = axios.create({
  baseURL: "https://core.getskill.id/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
