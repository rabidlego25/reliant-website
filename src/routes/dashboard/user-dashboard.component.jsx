import React, { useState, useEffect, useRef } from "react";

import { useLocation, useNavigate } from "react-router";

import axios from "axios";

import { DashContainer } from "./user-dashboard.styles";

import AddModal from "../../components/dashboard/add-modal.component";
import CompaniesTable from "./../../components/dashboard/companies-table.component";

const Dashboard = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [companies, setCompanies] = useState();

  const companyModalRef = useRef();
  const companyModalCloseRef = useRef();

  let location = useLocation();
  let navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/login", { state: null, replace: true });
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setAddModal(true);
  };

  const handleWindowClick = (e) => {
    console.log("window click");
    const modal = document.querySelector(".modal-container");
    const closeButton = companyModalCloseRef.current;
    const closestClose = e.target.closest(".icon");
    const modalWrapper = e.target.closest(".modal-container");
    if (modalWrapper === modal) {
      if (closeButton === closestClose) {
        console.log("X clicked");
        setAddModal(false);
      }
    } else {
      setAddModal(false);
    }
  };

  //eslint-disable-next-line
  useEffect(() => {
    if (location.state === null) {
      navigate("/login", { state: null, replace: true });
    } else setFirstName(location.state.firstName);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!initialLoad) return;
    const loadCompanies = async () => {
      axios
        .get("http://localhost:8080/api/admin/companies")
        .then((res) => {
          setCompanies(res.data);
        })
        .catch((err) => console.log(err.response));
    };
    loadCompanies();
    setInitialLoad(false);
    // eslint-disable-next-line
  }, [initialLoad]);

  useEffect(() => {
    if (addModal) {
      console.log("Add Modal: ", addModal);
    }

    if (!addModal) {
      return () => window.removeEventListener("click", handleWindowClick);
    }

    if (companyModalRef.current === null) return;
    if (addModal) window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
    //eslint-disable-next-line
  }, [addModal]);

  return (
    <DashContainer>
      <div
        className={
          addModal ? "blur-background dash-container" : "dash-container"
        }
      >
        <div className="dash-item">
          <h1>Hello {firstName}</h1>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
        <form className="dash-item">
          <button onClick={handleAddClick}>Add Company</button>
        </form>
        <CompaniesTable className="dash-item" companies={companies} />
      </div>
      {addModal ? (
        <AddModal modalRef={companyModalRef} closeRef={companyModalCloseRef} />
      ) : null}
    </DashContainer>
  );
};

export default Dashboard;
