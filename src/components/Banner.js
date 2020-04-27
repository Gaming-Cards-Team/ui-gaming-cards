import React from 'react';
import banner from "../assets/images/banner.png"
import { BANNER_ALT } from "../util/constant.js"


const Banner = () => (
       <img data-testid='banner'
              className=''
              width= '100%'
              src={banner}
              alt={BANNER_ALT} />

);

export default Banner;