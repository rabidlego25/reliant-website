import React, { useContext } from "react";

import { Layout } from "./feature.styles";

import TableBody from "./feature-body.component";
import TableMenu from "./feature-menu.component";
import TableFooter from "./feature-footer.component";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

const Feature = () => {
  const {
    context: { companies },
  } = useContext(InitialContext); // [companyData, setCompanyData]

  return (
    <Layout>
      <TableMenu />
      <TableBody />
      <TableFooter />
    </Layout>
  );
};

export default Feature;
