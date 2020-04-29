import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductText from "./ProductText";

const ProductDetailBody = () => {
  return (
    <div>
      <Row>
        <Col lg={1} md={0} sm={12} xs={12}></Col>
        <Col lg={4} md={5} sm={12} xs={12}>
          <img
            src="https://swdestinydb.com/bundles/cards/en/12/12081.jpg"
            alt="Card"
          />
        </Col>
        <Col lg={6} md={7} sm={12} xs={12}>
          <ProductText />
        </Col>
        <Col lg={1} md={0} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
};

export default ProductDetailBody;
