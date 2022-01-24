import React, { useState, useEffect, useRef } from "react";

import { useLocation, useNavigate } from "react-router";

import {
  DashContainer,
  SideNav,
  ToggleSideNav,
  Tab,
  TabContainer,
  Logout,
} from "./user-dashboard.styles";

import CompaniesTable from "./../../components/dashboard/companies-table.component";
import EmployeesTable from "../../components/dashboard/employees-table.component";

import AdminHub from "../../components/dashboard/admin-hub.component";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("admin");

  const menu = useRef();
  const tabContainer = useRef();

  let location = useLocation();
  let navigate = useNavigate();

  const handleToggleSideNav = () => {
    menu.current.classList.toggle("hidden");
  };

  const handleNavClick = (e) => {
    let target = e.target.closest(".tab"); // identify tab header clicked was in
    if (!target) return; // if no tab return
    if (target.classList.contains("active")) return; // if tab is already active return
    let tabsArray = Array.from(tabContainer.current.children); // create array of tabs
    tabsArray.forEach((tab) => tab.classList.remove("active")); // remove active class from each
    target.classList.add("active"); // add active class to tab
    let data = target.dataset.active; // extract tab data for setting display state
    setActiveComponent(data);
  };

  const handleTabClick = (e) => {};

  const handleLogout = (e) => {};

  //eslint-disable-next-line
  useEffect(() => {
    console.log("dashboard useEffect");
    if (location.state === null) {
      // if nobody is logged in (we set location.state after successful login) then redirect to dashboard
      navigate("/login", { state: null, replace: true });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <DashContainer>
      <SideNav ref={menu} className="">
        <ToggleSideNav onClick={handleToggleSideNav}>&#9654;</ToggleSideNav>
        <TabContainer onClick={handleTabClick} ref={tabContainer}>
          <Tab className="tab active" data-active="admin">
            <h4 onClick={handleNavClick}>Admin Hub</h4>
          </Tab>
          <Tab className="tab" data-active="company">
            <h4 onClick={handleNavClick}>Company Data</h4>
          </Tab>
          <Tab className="tab" data-active="employees">
            <h4 onClick={handleNavClick}>Employee Trainings</h4>
          </Tab>
        </TabContainer>
        <Logout to="/" style={{ border: "none" }}>
          <h4 onClick={handleLogout}>Logout</h4>
        </Logout>
      </SideNav>
      {activeComponent === "employees" ? (
        <EmployeesTable />
      ) : activeComponent === "company" ? (
        <CompaniesTable />
      ) : activeComponent === "admin" ? (
        <AdminHub />
      ) : (
        <div>Error</div>
      )}
    </DashContainer>
  );
};

export default Dashboard;
