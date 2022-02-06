import React from "react";

import { useLocation } from "react-router-dom";

import { AdminWrapper } from "./admin-hub.styles";

import { getTraining } from "../../../services/training.service";

const uuid = "db3c95b4-126f-4037-8dd3-d22fa0b38f16";
// const uuid = "0117102a-c6c5-4bdc-a70d-6ce5f17b51ad";

const AdminHub = () => {
  const { state } = useLocation();

  const handlePdfRequest = async (e) => {
    console.log("handlePdfRequest");
    try {
      let response = await getTraining(uuid);
      console.log(response);

      window.open(URL.createObjectURL(response.data));
      URL.revokeObjectURL(response.data);
      console.log("data");
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 404)
        alert("Training with Requested ID Not Found");
    }
  };

  return (
    <AdminWrapper>
      Hello {state.firstName}
      <button onClick={handlePdfRequest}>PDF Click</button>
    </AdminWrapper>
  );
};

export default AdminHub;
