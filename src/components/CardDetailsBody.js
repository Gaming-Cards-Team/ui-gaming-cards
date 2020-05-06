import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardTextFields from "./CardTextFields";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlankLines from './BlankLines';
import productGalleryManagerClient from "../clients/productGalleryManagerClient";

const imageStyle = {
  textAlign: "center",
  padding: "40px 0px",
};
const productTextStyle = { 
  padding: "40px 20px",
};

const CardDetailsBody = ({ id }) => {

  const [card, setCard] = useState({});

  useEffect(() => {
    productGalleryManagerClient.getStarWarsCard(id)
      .then(card => {
        setCard(card)
      })
  }, [id]);

  return (
    <div>
      <BlankLines />
      <Row>
        <Col lg={2} md={1} sm={12} xs={12}></Col>
        <Col lg={3} md={4} sm={12} xs={12} style={imageStyle}>
          <div data-cy={card.id}>
            <LazyLoadImage src={card.image} width={"100%"} effect="blur" />
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div style={productTextStyle}>
            <CardTextFields
              name={card.name}
              subtitle={card.subtitle}
              rarity={card.rarity}
              cardNumber={card.card}
              type={card.type}
              affiliation={card.affiliation}
              color={card.color}
              points={card.points}
              uniqueness={card.uniqueness}
              text={card.text} />
          </div>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
};

export default CardDetailsBody;
