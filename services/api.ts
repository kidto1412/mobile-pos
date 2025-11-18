// src/api/client.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api.com",
  timeout: 15000,
});

export default api;
