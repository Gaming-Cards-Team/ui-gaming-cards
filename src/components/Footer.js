import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FOOTER_TEXT } from "../util/constant.js"

const textStyle={
    color: "white",
    width: "100%",
    textAlign: "center",
  };
  const footerStyle={
    backgroundColor: "#2d963f"
  };

const Footer = () => (
  <Navbar 
  fixed="bottom"
  style={footerStyle}
  >
    <div
      data-testid="footer-text"
      style={textStyle}
    >
      {FOOTER_TEXT}
    </div>
  </Navbar>
);

export default Footer;
