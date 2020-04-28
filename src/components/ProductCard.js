import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  paddingTop: 10,
  paddingBottom: 15,
};

const ProductCard = (props) => {
  const { image, name, price } = props;
  return (
    <div style={cardStyle}>
      <Card >
        <Card.Body>
          <Card.Img variant="top" src={image} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
