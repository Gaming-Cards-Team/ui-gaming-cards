import React from "react";
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
  
const cardStyle = {
  paddingTop: 10,
  paddingBottom: 15,
};

const ProductCard = ({ image}) => {
  return (
    <div style={cardStyle}>
      <Card >
        <Card.Body>
          <LazyLoadImage
            src={image}
            width={'100%'}
            effect="blur" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
