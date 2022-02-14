import React, { useContext } from "react";

import {
  FeatureWrapper,
  Layout,
  FeatureBody,
} from "./companies-feature.styles";

import FeatureMenu from "./feature-menu.component";

import BodyTable from "./body-table.component";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

const CompaniesFeature = () => {
  return (
    <FeatureWrapper>
      <Layout>
        <FeatureMenu />
        <FeatureBody>
          <BodyTable />
        </FeatureBody>
      </Layout>
    </FeatureWrapper>
  );
};

export default React.memo(CompaniesFeature);
