import React from "react";
import logo from "../assets/images/logo.png"
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
     <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img data-testid='logo'
              className=''
              height='48'
              src={logo}
              alt="Level Up Logo" />
        </Navbar.Brand>
      </Navbar>
  );
};

export default Header;
