import axios from "axios";

import BASE_URL from "./config";

export const deleteCompany = async (com, id) => {
  console.log("deleteCompany");

  return axios
    .delete(BASE_URL + `admin/deleteCompany/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const loadCompanies = async () => {
  return axios
    .get(BASE_URL + "admin/companies")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err.response));
};

export const getCompany = async (id) => {
  return axios
    .get(BASE_URL + `admin/company/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const updateCompany = async (formData) => {
  console.log("formData: ", formData);
  const { id } = formData;
  return axios
    .patch(BASE_URL + `admin/updateCompany/${id}`, formData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const addCompany = async (formData) => {
  console.log("formData: ", formData);
  return axios
    .post(BASE_URL + `admin/addCompany`, formData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
