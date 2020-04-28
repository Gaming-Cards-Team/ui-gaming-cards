import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VIDEO_ALTERNATIVE_TEXT,
  MESSAGE_FOR_OTHER_CARDS,
  HERE,
  HOW_TO_PLAY,
} from "../util/constant";
import youtubeVideoImage from "../assets/images/youtubeVideoImage.png";

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
        {MESSAGE_FOR_OTHER_CARDS}
        <a style={linkStyle} href="{#}">
          {HERE}
        </a>
      </Col>
      <Col xs={3} style={videoTagStyle}>
        <a style={linkStyle} href="https://www.youtube.com/watch?v=3gPu9pp2WOM">
          {HOW_TO_PLAY}
          <img
            data-testid="youtubeVideo"
            height="48"
            src={youtubeVideoImage}
            alt={VIDEO_ALTERNATIVE_TEXT}
          />
        </a>
      </Col>
    </Row>
  </div>
);

export default TopMessage;
