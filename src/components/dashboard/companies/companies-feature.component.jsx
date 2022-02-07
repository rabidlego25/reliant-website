import React, { useEffect, useState, useContext } from "react";

import { InitialContext } from "../../../routes/dashboard/user-dashboard.component";

import { FeatureWrapper } from "./companies-feature.styles";

const CompaniesFeature = () => {
  const companies = useContext(InitialContext)["companies"]; // [companyData, setCompanyData]

  useEffect(() => {
    if (!companies) return;
    console.log("companies: ", companies);
  }, [companies]);

  if (companies[0].length === 0) {
    return <div></div>;
  } else return <FeatureWrapper></FeatureWrapper>;
};

export default React.memo(CompaniesFeature);
