import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const App = () => {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    console.log(`PRODUCT_GALLERY_MANAGER_URL=${process.env.PRODUCT_GALLERY_MANAGER_URL}`)
      fetch(`${process.env.PRODUCT_GALLERY_MANAGER_URL}/api/v1/cards`)
      .then(res => res.json())
      .then(readResponse)
      .catch(console.log)
  }, []);

  function readResponse(cards) {
    const gallery = cards.data.map(mapToItem)
    console.log(gallery)
    setGallery(gallery);
  }

  function mapToItem(card) {
    const item = { key: card.id, value: card.name } 
    return item;
  }

  return (
    <div>
      <Header>

      </Header>
      <Body>

      </Body>
      <Footer>

      </Footer>
    </div>
  );
};

export default App;