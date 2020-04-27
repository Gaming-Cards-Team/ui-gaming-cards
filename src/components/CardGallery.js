import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductCard from "./ProductCard"
import mockGetCards from "./__mocks__/mockGetCards"

const cardGalleryStyle = {
  marginTop: 30,
  marginBottom: 50,
  marginRight: 100,
  marginLeft: 100,
};

const CardGallery = () => {
  const {data} = mockGetCards;
return ( <div style={cardGalleryStyle}>
   
    <CardDeck> 
      {data.map(card => (
              <ProductCard 
              image={card.image}
              name={card.name}
              price={"$1.00"} >
              </ProductCard>
      ))}
    </CardDeck>
  </div>
)};

export default CardGallery;
