import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCard from "./ProductCard";
import mockGetCards from "./__mocks__/mockGetCards";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const cardGalleryStyle = {
  marginTop: 30,
  marginBottom: 50,
  marginRight: 100,
  marginLeft: 100,
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
              name={card.name}
              price={"$1.00"}
            ></ProductCard>
            
          </Col>
        ))}
      </CardDeck>
    </div>
  );
};

export default CardGallery;
