import React from "react";
import Banner from "./Banner";
import TopMessage from "./TopMessage";
import CardGallery from "./CardGallery";
import BlankLines from './BlankLines'

const MainBody = () => {
  return (
    <>
      <BlankLines/>
      <Banner/>
      <TopMessage/>
      <CardGallery/>
    </>
  );
};

export default MainBody;
