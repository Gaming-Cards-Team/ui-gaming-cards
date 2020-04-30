import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductText from "./ProductText";
const imageStyle = {
  textAlign: "center",
  padding: "40px 0px",
};
const productTextStyle = {
  padding: "40px 20px",
};

const ProductDetailBody = () => {
  return (
    <div>
      <br/><br/><br/>
      <Row>
        <Col lg={2} md={1} sm={12} xs={12}></Col>
        <Col lg={3} md={4} sm={12} xs={12} style={imageStyle}>
          <img
            src="https://swdestinydb.com/bundles/cards/en/12/12081.jpg"
            alt="Card"
          />
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div style={productTextStyle}>
          <ProductText />
          </div>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
};

export default ProductDetailBody;
