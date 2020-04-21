import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FOOTER_TEXT } from "../util/constant.js"

const textStyle={
    color: "white",
    width: "100%",
    textAlign: "center",
  };

const Footer = () => (
  <Navbar bg="success" fixed="bottom">
    <div
      data-testid="footer-text"
      style={textStyle}
    >
      {FOOTER_TEXT}
    </div>
  </Navbar>
);

export default Footer;
