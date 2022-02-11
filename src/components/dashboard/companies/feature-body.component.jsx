import React from "react";

import { BodyWrapper } from "./feature-body.styles";

import BodyTable from "./body-table.component";
import BodyDisplay from "./body-display.component";

const FeatureBody = () => {
  return (
    <BodyWrapper>
      <BodyTable />
      <BodyDisplay />
    </BodyWrapper>
  );
};

export default FeatureBody;
