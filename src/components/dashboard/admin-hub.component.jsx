import React from "react";

import { useLocation } from "react-router-dom";

import { AdminWrapper } from "./admin-hub.styles";

const AdminHub = () => {
  const { state } = useLocation();

  console.log("location: ", state);

  return <AdminWrapper>Hello {state.firstName}</AdminWrapper>;
};

export default AdminHub;
