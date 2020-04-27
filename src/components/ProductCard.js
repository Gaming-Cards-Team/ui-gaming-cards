import React from "react";
import Card from "react-bootstrap/Card";

const priceStyle = {
    widht: "100%",
    textAlign: "right",
  };

const ProductCard = (props) => {
const {image, name, price} = props;
return (<Card>
            <Card.Img
            variant="top"
            src={image}
            />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <div style={priceStyle}>{price}</div>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Add to cart</small>
            </Card.Footer>
      </Card>);
}

export default ProductCard;