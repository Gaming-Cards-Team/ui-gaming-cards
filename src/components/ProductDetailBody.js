import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductText from "./ProductText";


const imageStyle = {
  textAlign: "right",
};
const productTextStyle = {
  color: "#2d963f",
  fontWeight: "bold",
};

const ProductDetailBody = () => {
  return (
    <div>
    <Row>
      <Col xs={5} style={imageStyle}>
        Imagen
      </Col>
      <Col xs={7} style={productTextStyle}>
            <ProductText />
      </Col>
    </Row>
  </div>

  );
};

export default ProductDetailBody;
