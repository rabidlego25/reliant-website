import React, { useContext } from "react";

import { TableWrapper } from "./body-table.styles";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

import Table from "@mui/material/Table";

const createData = (id, companyName, owner, active, type) => {
  return { id, companyName, owner, type, active };
};

const BodyTable = () => {
  const {
    context: { companies },
  } = useContext(InitialContext);

  console.log("companies: ", companies);

  return <TableWrapper></TableWrapper>;
};

export default BodyTable;
