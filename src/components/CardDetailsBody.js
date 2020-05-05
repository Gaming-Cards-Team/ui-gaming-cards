import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardTextFields from "./CardTextFields";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MockGetCardDetail from "./__mocks__/mockGetCardDetail";
import BlankLines from './BlankLines'

const imageStyle = { 
  textAlign: "center",
  padding: "40px 0px",
};
const productTextStyle = {
  padding: "40px 20px",
};

const  CardDetailsBody = ({id}) => {
  const card = MockGetCardDetail;
  return (
    <div>
      <BlankLines />
      <Row>
        <Col lg={2} md={1} sm={12} xs={12}></Col>
        <Col lg={3} md={4} sm={12} xs={12} style={imageStyle}>
          <LazyLoadImage src={card.image} width={"100%"} effect="blur" />
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div style={productTextStyle}>
            <CardTextFields
              rarity={card.rarity_name}
              position={card.position}
              type={card.type_name}
              affiliation={card.affiliation_name}
              color={card.faction_code}
              points={card.points}
              uniqueness={card.uniqueness}
              text={card.text}
            />
          </div>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
};

export default CardDetailsBody;
