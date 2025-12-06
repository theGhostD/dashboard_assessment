import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const service = axios.create({
  baseURL: API_URL,
  timeout: 60000,
});



export default service;
