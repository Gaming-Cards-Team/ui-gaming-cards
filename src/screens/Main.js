import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div data-testid="mainPage">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
