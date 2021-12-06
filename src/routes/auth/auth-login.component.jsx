import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Div, ErrorBox, Form } from "./auth-login.styles";
import axios from "axios";

const initialFormData = Object.freeze({
  email: "",
  password: "",
});

const LoginPage = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [status, setStatus] = useState([]);
  const [submit, setSubmit] = useState(false);
  //eslint-disable-next-line
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    setSubmit(true);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    if (!submit) return;
    const loginPost = async () => {
      axios
        .post("http://localhost:8080/api/auth/signin", { formData })
        .then((res) => {
          console.log(res);
          console.log(res.data.user);
          if (res.data.status === "success") {
            const user = res.data.user;
            navigate("/dashboard", { state: user, replace: true });
          }
          setStatus(res.data.status);
        })
        .catch((err) => {
          console.log(err.response);
          setStatus(err.response.data.message);
        });
    };
    setSubmit(false);
    loginPost();
    return () => {};
    //eslint-disable-next-line
  }, [submit]);

  return (
    <Div className="center-flex">
      <Form onSubmit={handleSubmit}>
        <div className="image-container center-flex">
          <img
            src={require("./../../assets/user.png").default}
            alt="generic user logo"
          />
        </div>
        <div className="form-details">
          <div>
            <label htmlFor="username">Username </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit center-flex">
          <button type="submit">Submit</button>
        </div>
        <Link to="/register">Register</Link>
      </Form>
      <ErrorBox className="center-flex">{status}</ErrorBox>
    </Div>
  );
};

export default LoginPage;
