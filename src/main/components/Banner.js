import React from 'react';
import banner from "../resources/banner.jpg"

const Banner = () => (
       <img data-testid='banner'
              className=''
              width= '100%'
              src={banner}
              style= {{opacity:0.6}}
              alt="Star Wars Banner" />

);

export default Banner;