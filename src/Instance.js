import axios from "axios";

const instance = axios.create({
  baseURL: "https://stage2.eupheus.in/",
  // baseURL: "http://localhost:5070/",
});

export default instance;
