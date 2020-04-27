import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import youtubeVideoImage from "../resources/youtubeVideoImage.png";

const topMessageStyle = {
  fontSize: "larger",
  background: "black",
  width: "100%",
  color: "white",
  padding: "10px 30px",
};
const messageStyle = {
  padding: "10px 0px",
};
const videoTagStyle = {
  textAlign: "right",
};
const linkStyle = {
  color: "#2d963f",
  fontWeight: "bold",
};

const TopMessage = () => (
  <div style={topMessageStyle}>
    <Row>
      <Col xs={9} style={messageStyle}>
        Are you looking for cards for other game cards? check our catalog
        <a style={linkStyle} href="https://www.youtube.com/"> here</a>
      </Col>
      <Col xs={3} style={videoTagStyle}>
        <a style={linkStyle} href="https://www.youtube.com/watch?v=3gPu9pp2WOM">
          How to play
          <img
            data-testid="youtubeVideo"
            height="48"
            src={youtubeVideoImage}
            alt="Level Up Logo"
          />
        </a>
      </Col>
    </Row>
  </div>
);

export default TopMessage;
