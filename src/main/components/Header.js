import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import logo from "../resources/logo.png"

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  logo: {
    width: 135,
    height: 43.54
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root} id='header'>
      <AppBar position="static" color="default">
        <Toolbar>
          <img
            data-testid='logo'
            className={classes.logo}
            src={logo}
            alt="Level Up Logo"
          />
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Header;
