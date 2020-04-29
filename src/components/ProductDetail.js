import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const imageStyle = {
  textAlign: "right",
};
const detailStyle = {
  color: "#2d963f",
  fontWeight: "bold",
};

const ProductDetail = () => (
  <div>
    <Row>
      <Col xs={5} style={imageStyle}>
        
      </Col>
      <Col xs={7} style={detailStyle}>
        
      </Col>
    </Row>
  </div>
);

export default ProductDetail;
