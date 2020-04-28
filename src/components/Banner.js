import React from "react";
import banner from "../assets/images/banner.png";
import { BANNER_ALTERNATIVE_TEXT } from "../util/constant.js";

const Banner = () => (
  <img
    data-testid="banner"
    width="100%"
    src={banner}
    alt={BANNER_ALTERNATIVE_TEXT}
  />
);

export default Banner;
