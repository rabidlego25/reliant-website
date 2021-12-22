import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import { DashContainer } from "./user-dashboard.styles";

import CompaniesTable from "./../../components/dashboard/companies-table.component";
import EmployeesTable from "../../components/dashboard/employees-table.component";

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
      <div className="dash-item company-container">
        <CompaniesTable />
      </div>
      <div className="dash-item employee-container">
        <EmployeesTable />
      </div>
    </DashContainer>
  );
};

export default Dashboard;
