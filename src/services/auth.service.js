import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth/";

export let loginErrors = [];
export let RegistrationErrors = [];

export const fetchData = async () => {};

export const login = async ({ ...data }) => {
  axios
    .post(BASE_URL + "signin", {
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
    .post(BASE_URL + "register", {
      data,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
