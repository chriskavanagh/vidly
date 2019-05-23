import axios from "axios";
//import Raven from "raven-js";
//import logger from "./logService";
import { toast } from "react-toastify";
//import jwtDecode from "jwt-decode";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //logger.log(error);
    //Raven.captureException(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

// set up proxy in package.json instead
// "proxy": "http://localhost:3900"

export default axios.create({
  baseURL: "http://localhost:3900/api/"
  //responseType: "json"
});
