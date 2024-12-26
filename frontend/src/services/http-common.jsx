import axios from "axios";
export default axios.create({
  baseURL: "https://full-web-three.vercel.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
