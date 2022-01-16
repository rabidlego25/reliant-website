import axios from "axios";
import BASE_URL from "./config";

// const BASE_URL = "http://localhost:8080/api/auth/";

export let loginErrors = [];
export let RegistrationErrors = [];

export const login = async ({ ...data }) => {
  axios
    .post(BASE_URL + "auth/signin", {
      data,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err.response) loginErrors = [`${err.response.data.message}`];
      return loginErrors;
    });

  return loginErrors;
};

export const register = async ({ ...data }) => {
  return axios
    .post(BASE_URL + "auth/register", {
      data,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
