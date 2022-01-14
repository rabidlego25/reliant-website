import React, { useState, useEffect, useRef } from "react";

import { useLocation, useNavigate } from "react-router";

import {
  DashContainer,
  SideNav,
  ToggleSideNav,
  Tab,
} from "./user-dashboard.styles";

import CompaniesTable from "./../../components/dashboard/companies-table.component";
import EmployeesTable from "../../components/dashboard/employees-table.component";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  // const [sideNav, setSideNav] = useState(true);
  const [activeComponent, setActiveComponent] = useState("employees");

  const menu = useRef();

  let location = useLocation();
  let navigate = useNavigate();

  const handleToggleSideNav = () => {
    menu.current.classList.toggle("hidden");
  };

  const handleNavClick = (e) => {
    let target = e.target.closest(".tab");
    if (!target) return;
    let data = target.dataset.active;
    setActiveComponent(data);
  };

  //eslint-disable-next-line
  useEffect(() => {
    console.log("dashboard useEffect");
    console.log("firstName: ", firstName);
    if (location.state === null) {
      navigate("/login", { state: null, replace: true });
    } else setFirstName(location.state.firstName);
    //eslint-disable-next-line
  }, []);

  return (
    <DashContainer>
      <SideNav ref={menu} className="">
        <ToggleSideNav onClick={handleToggleSideNav}>&#9654;</ToggleSideNav>
        <Tab className="tab" data-active="main">
          <h4 onClick={handleNavClick}>Admin Hub</h4>
        </Tab>
        <Tab className="tab" data-active="user">
          <h4 onClick={handleNavClick}>User Management</h4>
        </Tab>
        <Tab className="tab" data-active="company">
          <h4 onClick={handleNavClick}>Company Data</h4>
        </Tab>
        <Tab className="tab active" data-active="employees">
          <h4 onClick={handleNavClick}>Employee Trainings</h4>
        </Tab>
      </SideNav>
      {activeComponent === "employees" ? (
        <EmployeesTable />
      ) : activeComponent === "company" ? (
        <CompaniesTable />
      ) : null}
    </DashContainer>
  );
};

export default Dashboard;
