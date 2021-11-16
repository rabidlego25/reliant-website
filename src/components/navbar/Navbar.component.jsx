import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { Nav, DivLeft, DivRight, HeaderLink } from "./Navbar.styles";

const Navbar = () => {
  const [opacity, setOpacity] = useState(100);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }, []);

  return (
    <Nav opacity>
      <DivLeft>
        <NavLink to="/">
          <img
            className="logo"
            src={require("./../../assets/logo_alt.png").default}
            alt="logo"
          />
        </NavLink>
      </DivLeft>
      <DivRight>
        <div className="link-container">
          <HeaderLink className="nav-link">About</HeaderLink>
          <HeaderLink className="nav-link">Programs</HeaderLink>
          <HeaderLink className="nav-link">Training</HeaderLink>
        </div>
      </DivRight>
    </Nav>
  );
};

export default Navbar;
