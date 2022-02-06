import axios from "axios";

import BASE_URL from "./config";

export const getTraining = async (trainingId) => {
  console.log("getTraining");
  console.log("uuid: ", trainingId);
  return axios.get(BASE_URL + `admin/get_training/${trainingId}`, {
    responseType: "blob",
  });
};
