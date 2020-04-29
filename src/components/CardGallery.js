import React, { useState } from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import ProductCard from "./ProductCard";
import Col from "react-bootstrap/Col";
import productGalleryManagerClient from "../clients/productGalleryManagerClient";
import ScrollToFetch from 'react-scroll-to-fetch'

const cardGalleryStyle = {
  paddingTop: 30,
  paddingBottom: 50,
  paddingRight: 100,
  paddingLeft: 100,
};

const CardGallery = () => {

  const [gallery, setGallery] = useState([]);
  const [finished, setFinished] = useState(false);

  const fetch = (page) => {
    console.log('fetch')
    productGalleryManagerClient.getStarWarsCardsPaginated(page, 12)
      .then(res => {
        const oldData = gallery;
        const newData = res.data;
        setFinished(newData.lenght === 0)
        const fullData = oldData.concat(...newData)
        setGallery(fullData)
      })
  }

  return (
    <div style={cardGalleryStyle}>
      <ScrollToFetch
        fetch={fetch}
        finished={finished}
        initialLoad={true}>
        <CardDeck>
          {gallery.map((card) => (
            <Col key={card.id} lg={3} md={4} sm={6} xs={12}>
              <ProductCard image={card.image} />
            </Col>
          ))}
        </CardDeck>
      </ScrollToFetch>
    </div >
  );
};

export default CardGallery;
