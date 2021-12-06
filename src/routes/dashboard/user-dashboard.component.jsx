import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react/cjs/react.development";

import axios from "axios";

import { Div, ErrorBox } from "./user-dashboard.styles";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [requestButton, setRequestButton] = useState(false);
  const [addButton, setAddButton] = useState(false);
  const [addInput, setAddInput] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [companies, setCompanies] = useState([]);

  let location = useLocation();
  let navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/login", { state: null, replace: true });
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setAddButton(true);
  };

  const handleRequestClick = () => {
    setRequestButton(true);
  };

  const onAddChange = (e) => {
    e.preventDefault();
    setAddInput(e.target.value);
  };

  //eslint-disable-next-line
  useEffect(() => {
    console.log("basic use effect");
    if (location.state === null) {
      navigate("/login", { state: null, replace: true });
    } else setFirstName(location.state.firstName);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!addButton) return;
    const addCompany = async () => {
      axios
        .post("http://localhost:8080/api/admin/addCompany", {
          addInput,
        })
        .then((res) => {
          setAddMessage("Successfully Added!");
        })
        .catch((err) => {
          setAddMessage(err.response.data.message);
          console.log(err.response);
        });
    };
    addCompany();
    setAddButton(false);
  }, [addButton, addInput]);

  useEffect(() => {
    if (!requestButton) return;
    const requestCompany = async () => {
      axios
        .get("http://localhost:8080/api/admin/company")
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err.response);
        });
    };
    requestCompany();
    setRequestButton(false);
  }, [requestButton]);

  return (
    <Div>
      <div>
        <h1>Hello {firstName}</h1>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <form>
        <button onClick={handleAddClick}>Add Company</button>
        <div>
          <label htmlFor="" />
          <input onChange={onAddChange} />
        </div>
        <ErrorBox>{addMessage}</ErrorBox>
      </form>
      <button onClick={handleRequestClick}>Request Companies</button>
    </Div>
  );
};

export default Dashboard;
