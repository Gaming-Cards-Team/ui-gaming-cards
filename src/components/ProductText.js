import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {RARITY, CARD,CARD_TYPE,AFFILIATION,COLOR,POINT_VALUES,UNIQUENESS,DESCRIPTION} from "../util/cardTextConstant";

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
const ProductText = () => (
  <div>
    <span style={titleStyle}> Destroy the Death Start</span>
    <h4>Covert Missions</h4>
    <div style={cardStyle}>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6} style={attributesStyle}>
              <p><span style={subtitleStyle}>{RARITY}</span>Uncommon</p>
              <p><span style={subtitleStyle}>{CARD}</span>81</p>
              <p><span style={subtitleStyle}>{CARD_TYPE}</span>Plot</p>
              <p><span style={subtitleStyle}>{AFFILIATION}</span>Hero</p>
              <p><span style={subtitleStyle}>{COLOR}</span>Red</p>
              <p><span style={subtitleStyle}>{POINT_VALUES}</span>2</p>
              <p><span style={subtitleStyle}>{UNIQUENESS}</span>Non/Unique</p>
            </Col>
            <Col xs={6}>
            <p style={subtitleStyle}>{DESCRIPTION}</p>
            After setup, give this plot 20 shields. You can resolve your <i>pilot</i> and <i>vehicle</i> dice showing ranged damage against this plot. <b>Action</b> - If this plot has no shields, spend 1 resource to reroll 1 of your <i>pilot</i> dice and 1 of your <i>vehicle</i> dice. Then, if both of those dice are showing damage, you win the game.
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default ProductText;
