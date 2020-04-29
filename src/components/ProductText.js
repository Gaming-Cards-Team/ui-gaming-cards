import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const attributesStyle = {
  textAlign: "right",
};
const descriptionStyle = {
  color: "#2d963f",
  fontWeight: "bold",
};

const ProductText = () => (
  <div>
    Nombre de la tarjeta Mini detalle
    <Row>
      <Col xs={6} style={attributesStyle}>
        Atributos
      </Col>
      <Col xs={6} style={descriptionStyle}>
        Desripcion
      </Col>
    </Row>
  </div>
);

export default ProductText;
