import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardDetailsBody from "../components/CardDetailsBody";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import productGalleryManagerClient from '../clients/productGalleryManagerClient';

const CardDetails = () => {

  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    productGalleryManagerClient.getStarWarsCard(id)
      .then(res => {
        setCard(res)
      })
  }, [id]);

  return (
    <>
      <Header />
      <CardDetailsBody card={card}/>
      <Footer />
    </>
  );
};

export default CardDetails;
