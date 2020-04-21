import React from 'react';
import banner from "../resources/banner.jpg"
import { BANNER_ALT } from "../util/constant.js"

const imageStyle={
       opacity:0.6
     };

const Banner = () => (
       <img data-testid='banner'
              className=''
              width= '100%'
              src={banner}
              style= {imageStyle}
              alt={BANNER_ALT} />

);

export default Banner;