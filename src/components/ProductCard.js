import React from "react";
import Card from "react-bootstrap/Card";
import LazyLoad from 'react-lazy-load';

const cardStyle = {
  paddingTop: 10,
  paddingBottom: 15,
};

const ProductCard = (props) => {
  const { image } = props;
  return (
    <div style={cardStyle}>
      <Card >
        <Card.Body>
          <LazyLoad offsetVertical={200}>
            <Card.Img variant="top" src={image} />
          </LazyLoad>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
