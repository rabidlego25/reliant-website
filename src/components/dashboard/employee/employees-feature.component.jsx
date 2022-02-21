import React from "react";

import {
  FeatureWrapper,
  Layout,
  FeatureBody,
} from "./employees-feature.styles";

import FeatureMenu from "./feature-menu.component";

import BodyTable from "./body-table.component";

const EmployeesFeature = () => {
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

export default React.memo(EmployeesFeature);
