import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { Nav, DivLeft, DivRight, HeaderLink } from "./Navbar.styles";

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);
  const [prevY, setPrevY] = useState(0);
  const [fadeMarker, setFadeMarker] = useState(0);
  const [mouseEnter, setMouseEnter] = useState(false);

  // eslint-disable-next-line
  const handleScroll = (e) => {
    const scrollY = window.scrollY; // get current Y value

    //Scrolling down
    if (prevY < scrollY) {
      mouseEnter
        ? setFadeMarker(scrollY)
        : setOpacity((1 - (scrollY - fadeMarker) / 500).toFixed(2));
      setPrevY(scrollY);
      if (scrollY - fadeMarker > 500) setFadeMarker(scrollY - 500);
    }

    //Scrolling upwards
    if (prevY > scrollY) {
      setPrevY(scrollY);
      setFadeMarker(scrollY);
      return setOpacity(1);
    }
  };

  const handleHover = () => {
    setMouseEnter(true);
    setOpacity(1);
  };

  const handleMouseExit = () => {
    setMouseEnter(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [prevY, opacity, fadeMarker]);

  return (
    <Nav
      opacity={opacity}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseExit}
    >
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
          <NavLink to="/" className="nav-link">
            Training
          </NavLink>
          <NavLink to="/login" className="nav-link">
            App
          </NavLink>
        </div>
      </DivRight>
    </Nav>
  );
};

export default Navbar;
