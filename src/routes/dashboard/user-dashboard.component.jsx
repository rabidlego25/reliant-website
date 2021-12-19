import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import { DashContainer } from "./user-dashboard.styles";

import CompaniesTable from "./../../components/dashboard/companies-table.component";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/login", { state: null, replace: true });
  };

  //eslint-disable-next-line
  useEffect(() => {
    if (location.state === null) {
      navigate("/login", { state: null, replace: true });
    } else setFirstName(location.state.firstName);
    //eslint-disable-next-line
  }, []);

  return (
    <DashContainer>
      <div className="dash-item">
        <h1>Hello {firstName}</h1>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <CompaniesTable className="dash-item" />
    </DashContainer>
  );
};

export default Dashboard;
