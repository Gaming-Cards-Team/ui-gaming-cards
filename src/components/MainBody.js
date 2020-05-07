import React from "react";
import Banner from "./Banner";
import TopMessage from "./TopMessage";
import CardGallery from "./CardGallery";
import BlankLines from './BlankLines'

const MainBody = ({ getStarWarsCardsPaginated }) => {
  return (
    <>
      <BlankLines/>
      <Banner/>
      <TopMessage/>
      <CardGallery getStarWarsCardsPaginated={ getStarWarsCardsPaginated }/>
    </>
  );
};

export default MainBody;
