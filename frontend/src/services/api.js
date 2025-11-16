// src/services/api.js
import axios from "axios";

// Create an axios instance pointing to your backend
const api = axios.create({
  baseURL: "http://localhost:5000", // <-- your backend URL
  withCredentials: true,             // optional: needed if you use cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
