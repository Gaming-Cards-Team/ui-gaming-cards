import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div data-cy="mainPage">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default Main;
