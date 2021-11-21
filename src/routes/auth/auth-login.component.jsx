import React from "react";
import { Div, Form } from "./auth-login.styles";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input type="password" id="password" />
          </div>
        </div>
        <div className="submit center-flex">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Div>
  );
};

export default LoginPage;
