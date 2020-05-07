import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";
import productGalleryManagerClient from "../clients/productGalleryManagerClient";

const Main = () => {

  const getStarWarsCardsPaginated = async (page) => {
    return productGalleryManagerClient.getStarWarsCardsPaginated(page, 8)
      .then(res => res.data)
  }

  return (
    <div data-cy="mainPage">
      <Header />
      <MainBody getStarWarsCardsPaginated={getStarWarsCardsPaginated} />
      <Footer />
    </div>
  );
};

export default Main;
