import React, { useContext } from "react";

import { Layout } from "./feature.styles";

import FeatureMenu from "./feature-menu.component";
import FeatureBody from "./feature-body.component";
import FeatureFooter from "./feature-footer.component";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

const Feature = () => {
  const {
    context: { companies },
  } = useContext(InitialContext); // [companyData, setCompanyData]

  return (
    <Layout>
      <FeatureMenu />
      <FeatureBody />
    </Layout>
  );
};

export default Feature;
