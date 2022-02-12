import React, { useState, useEffect, useRef, createContext } from "react";

import { useLocation, useNavigate } from "react-router";

// containers for dashboard
import {
  DashContainer,
  SideNav,
  ToggleSideNav,
  Tab,
  TabContainer,
  Logout,
} from "./user-dashboard.styles";

// functions required to set context/state
import { loadCompanies } from "../../services/company.service";
import { getEmployees } from "../../services/employee.service";
import { getTrainings } from "../../services/training.service";

// current pages to display based on state
import CompaniesFeature from "../../components/dashboard/companies/companies-feature.component";
import EmployeesTable from "../../components/dashboard/employees/employees-table.component";
import AdminHub from "../../components/dashboard/admin-hub/admin-hub.component";

// company data to be shared across all app components - exception sidebar
export const UpdateContext = createContext({
  update: "",
  setUpdate: () => {},
});

let contextObj = {
  companies: null,
  employees: null,
  trainings: null,
};
export const InitialContext = createContext({
  contextObj: contextObj,
  setContextObj: () => {},
});

// const getContextObj = () => {
//   return {
//     employees: {},
//     companies: {},
//     trainings: {},
//   };
// };

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("admin"); // chooses what feature to be displayed
  const [loggedIn, setLoggedIn] = useState(false); // assess whether user is logged in - used for authenticating feature display and rerouting
  const [context, setContext] = useState();
  const appContext = { context, setContext };

  const [update, setUpdate] = useState(null);
  const willUpdate = { update, setUpdate };

  const menu = useRef(); // ref needed for toggling sidebar
  const tabContainer = useRef(); // ref for container in sidebar holding feature nav links

  let location = useLocation(); // use for assessing loggedIn
  let navigate = useNavigate(); // use for assessing loggedIn

  // this will toggle view of sidebar
  const handleToggleSideNav = () => {
    menu.current.classList.toggle("hidden"); // hidden entails alteration of elememnt margin
  };

  // use to set activeComponent hook for assessing which feature to display
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

  //to be clicked when user opts to log out
  const handleLogout = (e) => {};

  // upon initial load - if not logged in redirect to other screen
  useEffect(() => {
    console.log("dashboard useEffect");
    if (location.state === null) {
      // if nobody is logged in (we set location.state after successful login) then redirect to dashboard
      setLoggedIn(false);
      navigate("/login", { state: null, replace: true });
    } else {
      setLoggedIn(true);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    console.log("loggedIn useEffect: ");
    const initialAsyncLoad = async () => {
      // load companies onto context
      loadCompanies().then(({ data }) => {
        // console.log("companies: ", data);
        contextObj["companies"] = data;
      });

      // load employees onto context
      getEmployees().then(({ data }) => {
        // console.log("employees: ", data);
        contextObj["employees"] = data;
      });

      //load trainings onto context
      getTrainings().then(({ data }) => {
        // console.log("trainings: ", data);
        contextObj["trainings"] = data;
      });

      setContext(contextObj);
    };

    initialAsyncLoad();
  }, [loggedIn]);

  // updating data upon succussful completion to backend/db
  useEffect(() => {
    if (!update) return;
    console.log("update: ", update);

    // promises need to resolve when making db call
    const asyncFunction = async () => {
      // update employees only
      if (update === "employees") {
        let { data } = await getEmployees();
        console.log("employees --- update: ", data);
        contextObj["employees"] = data;
        console.log("contextObj: ", contextObj);
        setContext({ ...context, employees: contextObj["employees"] });
      }

      // update companies only
      if (update === "companies") {
        let { data } = await loadCompanies();
        console.log("companies --- update: ", data);
        contextObj["companies"] = data;
        console.log("contextObj: ", contextObj);
        setContext({ ...context, companies: contextObj["companies"] });
      }

      // update trainings only
      if (update === "trainings") {
      }

      console.log("contextObj");
    };

    // update trainings only
    if (update === "trainings") {
      getTrainings().then(({ data }) => {
        console.log("trainings: ", data);
        contextObj["trainings"] = data;
      });
    }

    console.log("2 --- ", contextObj);
    setUpdate(null);
    asyncFunction();
  }, [update]);

  useEffect(() => {
    console.log("context--: ", context);
  }, [context]);

  return (
    <DashContainer>
      <SideNav ref={menu} className="">
        <ToggleSideNav onClick={handleToggleSideNav}>&#9654;</ToggleSideNav>
        <TabContainer ref={tabContainer}>
          <Tab className="tab active" data-active="admin">
            <h4 onClick={handleNavClick}>Admin Hub</h4>
          </Tab>
          <Tab className="tab" data-active="company">
            <h4 onClick={handleNavClick}>Client Data</h4>
          </Tab>
          <Tab className="tab" data-active="employees">
            <h4 onClick={handleNavClick}>Employee Trainings</h4>
          </Tab>
        </TabContainer>
        <Logout to="/" style={{ border: "none" }}>
          <h4 onClick={handleLogout}>Logout</h4>
        </Logout>
      </SideNav>

      <InitialContext.Provider value={appContext}>
        <UpdateContext.Provider value={willUpdate}>
          {activeComponent === "employees" && loggedIn ? (
            <EmployeesTable />
          ) : activeComponent === "company" && loggedIn ? (
            <CompaniesFeature />
          ) : activeComponent === "admin" && loggedIn ? (
            <AdminHub />
          ) : (
            <div>Error</div>
          )}
        </UpdateContext.Provider>
      </InitialContext.Provider>
    </DashContainer>
  );
};

export default Dashboard;
