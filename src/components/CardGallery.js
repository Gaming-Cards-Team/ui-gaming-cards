import React, { useState } from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import productGalleryManagerClient from "../clients/productGalleryManagerClient";
import ProductCard from './ProductCard';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const cardGalleryStyle = {
  paddingTop: 30,
  paddingBottom: 50,
  paddingRight: 100,
  paddingLeft: 100,
};

const loaderStyle = {
  width: "100%",
  textAlign: "center",
};

const CardGallery = () => {

  const [gallery, setGallery] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetch = (page) => {
    productGalleryManagerClient.getStarWarsCardsPaginated(page, 8)
    .then(res => res.data)  
    .then(newCards => {
        setHasMore(newCards.lenght !== 0)
        setGallery(gallery.concat(...newCards))
      })
  }

  return (
    <div style={cardGalleryStyle}>
      <InfiniteScroll
        loadMore={fetch}
        hasMore={hasMore}
        loader={<div style={loaderStyle} key={0}><Loader type="Bars"/></div>}>
          <CardDeck>
            {gallery.map((card) => (
              <Col key={card.id} lg={3} md={4} sm={6} xs={12}>
                 <Link to={`/card/${card.id}`}>
                    <ProductCard image={card.image} /> 
                 </Link>
              </Col>
            ))}
          </CardDeck>
      </InfiniteScroll>
    </div >
  );
};

export default CardGallery;