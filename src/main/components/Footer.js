import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <Navbar bg="success" fixed="bottom">
    <div
      data-testid="footer-text"
      style={{
        color: "white",
        width: "100%",
        textAlign: "center",
      }}
    >
      Star Wars 2020 All rights reserved. Copyright Level Up 
    </div>
  </Navbar>
);

export default Footer;
