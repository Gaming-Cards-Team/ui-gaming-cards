import React from "react";
import Header from "../components/Header";
import CardDetailsBody from "../components/CardDetailsBody";
import Footer from "../components/Footer";
import { useParams } from "react-router";

const CardDetails = () => {

  const { id } = useParams();
  return (
    <>
      <Header />
      <CardDetailsBody id={id}/>
      <Footer />
    </>
  );
};

export default CardDetails;
