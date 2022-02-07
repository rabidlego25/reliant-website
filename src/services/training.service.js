import axios from "axios";

import BASE_URL from "./config";

export const getTraining = async (trainingId) => {
  console.log("getTraining");
  console.log("uuid: ", trainingId);
  return axios
    .get(BASE_URL + `admin/get_training/${trainingId}`, {
      responseType: "blob",
    })
    .catch((err) => {
      return err.response;
    });
};

export const getTrainings = async () => {
  console.log("getTrainings");
  return axios.get(BASE_URL + `admin/get_trainings`).catch((err) => {
    return err.response;
  });
};
