import React from "react";
import logo from "../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LOGO_ALTERNATIVE_TEXT } from "../util/constant";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          data-testid="logo"
          height="48"
          src={logo}
          alt={LOGO_ALTERNATIVE_TEXT}
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
