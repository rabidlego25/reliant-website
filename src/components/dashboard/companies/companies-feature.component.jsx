import React, { useEffect, useState, useContext } from "react";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";
import { FeatureWrapper, Layout } from "./companies-feature.styles";

import Feature from "./feature.component";

const CompaniesFeature = () => {
  return (
    <FeatureWrapper>
      <Layout>
        <Feature />
      </Layout>
    </FeatureWrapper>
  );
};

export default React.memo(CompaniesFeature);
