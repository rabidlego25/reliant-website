import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router";

import { Wrapper, ErrorBox, CustomLink } from "./auth-register.styles";

import axios from "axios";

const initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const RegisterPage = () => {
  const [formData, updateFormData] = useState(initialFormData);
  //eslint-disable-next-line
  const [status, setStatus] = useState([]);
  const [success, setIsSuccess] = useState(false);
  const [submit, setSubmit] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    console.log("useeffect");
    if (!submit) return;
    const registrationPost = async () => {
      axios
        .post("http://localhost:8080/api/auth/register", { formData })
        .then((res) => {
          setStatus(res.data);
          console.log("STATUS: ", status);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log(err.response);
          setStatus(err.response.data.message);
        });
    };
    setSubmit(false);
    registrationPost();
    return () => {};
    //eslint-disable-next-line
  }, [submit]);

  useEffect(() => {
    console.log("success");
    if (!success) return;
    navigate("/login", { state: null, replace: true });
    console.log("window.location: ", window.location);
    console.log("location: ", location);

    return () => {};
    //eslint-disable-next-line
  }, [success]);

  return (
    <Wrapper className="center-flex">
      <div className="register-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="image-container center-flex">
            <img
              src={require("./../../assets/user.png").default}
              alt="generic user logo"
            />
            <h2 className="header">User Registration</h2>
          </div>
          <div className="field-container">
            <div className="field">
              <label htmlFor="first-name">First Name: </label>
              <input
                name="firstName"
                id="first-name"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="last-name">Last Name: </label>
              <input
                name="lastName"
                id="last-name"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email: </label>
              <input
                name="email"
                id="email"
                type="email"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company Name: </label>
              <input name="company" id="company" type="text" />
            </div>
            <div className="field">
              <label htmlFor="password">Password: </label>
              <input
                name="password"
                id="password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="confirm-password">Confirm Password: </label>
              <input
                name="confirmPassword"
                id="confirm-password"
                type="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="btn-container center-flex">
            <button type="submit" onClick={handleSubmit}>
              Submit Request
            </button>
          </div>
        </form>
        <div className="link-container">
          <CustomLink to="/login">
            Already Have an Account? Click Here
          </CustomLink>
        </div>
        <ErrorBox className="center-flex">
          <div>{status}</div>
        </ErrorBox>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
