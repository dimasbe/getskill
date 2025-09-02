import axios from "axios";

const api = axios.create({
  baseURL: "https://api-getskill.mijurnal.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
