import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCard from "./ProductCard";
import mockGetCards from "./__mocks__/mockGetCards";
import Col from "react-bootstrap/Col";

const cardGalleryStyle = {
  paddingTop: 30,
  paddingBottom: 50,
  paddingRight: 100,
  paddingLeft: 100,
};
const { data } = mockGetCards;

const CardGallery = () => {
  return (
    <div style={cardGalleryStyle}>
      <CardDeck>
        {data.map((card) => (
          <Col key={card.id} lg={3} md={4} sm={6} xs={12}>
            <ProductCard image={card.image} />
          </Col>
        ))}
      </CardDeck>
    </div>
  );
};

export default CardGallery;
