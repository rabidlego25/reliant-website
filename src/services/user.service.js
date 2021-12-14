import axios from "axios";

const BASE_URL = "http://localhost:8080/api/admin";

export const deleteCompany = async (com, id) => {
  console.log("deleteCompany");

  return axios
    .delete(BASE_URL + `/deleteCompany/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const loadCompanies = async () => {
  return axios
    .get(BASE_URL + "/companies")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err.response));
};
