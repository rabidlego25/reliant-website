import React from "react";

import { FeatureWrapper } from "./companies-feature.styles";

import Feature from "./feature.component";

const CompaniesFeature = () => {
  return (
    <FeatureWrapper>
      <Feature />
    </FeatureWrapper>
  );
};

export default React.memo(CompaniesFeature);
