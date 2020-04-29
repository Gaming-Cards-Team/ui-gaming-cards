import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductText from "./ProductText";
const imageStyle = {
  textAlign: "center",
  padding: "40px 0px",
};
const productTextStyle = {
  padding: "40px",
};

const ProductDetailBody = () => {
  return (
    <div>
      <Row>
        <Col lg={2} md={1} sm={12} xs={12}></Col>
        <Col lg={3} md={4} sm={12} xs={12} style={imageStyle}>
          <img
            src="https://swdestinydb.com/bundles/cards/en/12/12081.jpg"
            alt="Card"
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div style={productTextStyle}>
          <ProductText />
          </div>
        </Col>
        <Col lg={1} md={1} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
};

export default ProductDetailBody;
