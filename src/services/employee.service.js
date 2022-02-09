import axios from "axios";

import BASE_URL from "./config";

export const addEmployee = async (formData) => {
  console.log("addEmployee axios: ");
  return axios
    .post(BASE_URL + `admin/add_employee`, formData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getEmployees = () => {
  console.log("getEmployees");
  return axios
    .get(BASE_URL + `admin/employees`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getEmployee = async (empNo) => {
  console.log("getEmployee");
  return axios
    .get(BASE_URL + `admin/employee/${empNo}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const updateEmployee = (emp) => {
  console.log("update_employees");
  return axios
    .patch(BASE_URL + `admin/update_employee/${emp.uuid}`, { emp })
    .then((res) => {
      console.log("res: ", res);
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const conductTraining = async (formData) => {
  console.log("conductTraining");
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return axios
    .patch(BASE_URL + "admin/conduct_training", formData, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const deleteEmployee = (uuid) => {
  let obj = { uuid: uuid };
  return axios
    .delete(BASE_URL + "admin/delete_employee", { data: obj })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
