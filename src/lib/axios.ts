// lib/axios.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("Axios baseURL:", baseURL);

const instance = axios.create({
  baseURL: baseURL, // base URL backend-mu
});

export default instance;
