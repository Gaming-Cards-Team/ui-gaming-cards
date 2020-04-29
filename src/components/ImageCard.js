import React from "react";
import Card from 'react-bootstrap/Card'

const ImageCard = (props) => {
  const { image } = props;
  return (  
    <Card.Img variant="top" src={image} />
  );
};

export default ImageCard;
