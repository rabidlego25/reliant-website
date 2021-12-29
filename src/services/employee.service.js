import axios from "axios";

const BASE_URL = "http://localhost:8080/api/admin";

export const addEmployee = async (formData) => {
  console.log("addEmployee axios: ");
  return axios
    .post(BASE_URL + `/addEmployee`, formData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getEmployees = async () => {
  console.log("getEmployee");
  return axios
    .get(BASE_URL + `/employees`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err.response;
    });
};
