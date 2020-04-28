import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCard from "./ProductCard";
import mockGetCards from "./__mocks__/mockGetCards";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const cardGalleryStyle = {
  paddingTop: 30,
  paddingBottom: 50,
  paddingRight: 100,
  paddingLeft: 100,
};

const CardGallery = () => {
  const { data } = mockGetCards;
  return (
    <div style={cardGalleryStyle}>
      <CardDeck className='h-auto'>
        {data.map((card) => (
          <Col lg={3} md={4} sm={6} xs={12} >
            <ProductCard
              image={card.image}
            ></ProductCard>
            
          </Col>
        ))}
      </CardDeck>
    </div>
  );
};

export default CardGallery;
