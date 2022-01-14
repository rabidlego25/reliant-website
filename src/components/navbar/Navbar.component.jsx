import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Nav, DivLeft, DivRight, HeaderLink } from "./Navbar.styles";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      setLoggedIn(true);
    } else setLoggedIn(false);
  }, [location]);

  return (
    <Nav>
      <DivLeft>
        <HeaderLink>
          <img
            className="logo"
            src={require("./../../assets/logo_alt.png").default}
            alt="logo"
          />
        </HeaderLink>
      </DivLeft>
      <DivRight>
        <div className="link-container">
          {loggedIn ? (
            <NavLink to="/login" className="nav-link">
              Logout
            </NavLink>
          ) : null}
        </div>
      </DivRight>
    </Nav>
  );
};

export default Navbar;
