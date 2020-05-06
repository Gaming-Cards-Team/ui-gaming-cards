import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {RARITY, CARD,CARD_TYPE,AFFILIATION,COLOR,POINT_VALUES,UNIQUENESS,DESCRIPTION} from "../util/cardTextFieldsConstant";

const cardStyle = {
  paddingTop: 10,
  paddingBottom: 15,
};

const attributesStyle = {
  borderRight: "1px solid #a09797e6"
};
const titleStyle = {
  color: "#2d963f",
  fontSize: "xx-large",
  fontWeight: "bold",
};
const subtitleStyle = {
  fontWeight: "bold",
}

const ProductText = ({rarity, position, type, affiliation, color, points, uniqueness, text}) => (
  <div>
    <span style={titleStyle}> Destroy the Death Start</span>
    <h4>Covert Missions</h4>
    <div style={cardStyle}>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6} style={attributesStyle}>
              <p><span style={subtitleStyle}>{RARITY}</span>{rarity}</p>
              <p><span style={subtitleStyle}>{CARD}</span>{position}</p>
              <p><span style={subtitleStyle}>{CARD_TYPE}</span>{type}</p>
              <p><span style={subtitleStyle}>{AFFILIATION}</span>{affiliation}</p>
              <p><span style={subtitleStyle}>{COLOR}</span>{color}</p>
              <p><span style={subtitleStyle}>{POINT_VALUES}</span> {points}</p>
              <p><span style={subtitleStyle}>{UNIQUENESS}</span>{uniqueness}</p>
            </Col>
            <Col xs={6}>
            <p style={subtitleStyle}>{DESCRIPTION}</p>
              {text}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default ProductText;
