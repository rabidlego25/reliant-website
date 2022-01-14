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
  console.log("getEmployees");
  return axios
    .get(BASE_URL + `/employees`)
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
    .get(BASE_URL + `/employee/${empNo}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const updateEmployee = async (emp) => {
  console.log("updateEmployees");
  return axios
    .patch(BASE_URL + `/updateEmployee/${emp.empNo}`, { emp })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const updateEmployees = async (...props) => {
  console.log("updateEmployees");
  return axios
    .patch(BASE_URL + "/updateEmployees", { ...props })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
