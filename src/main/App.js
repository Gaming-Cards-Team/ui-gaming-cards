import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const App = () => {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
      console.log(process.env)
      fetch(`${process.env.PRODUCT_GALLERY_MANAGER_URL}/api/v1/show-gallery`)
      .then(res => res.json())
      .then(readResponse)
      .catch(console.log)
  }, []);

  function readResponse(cards) {
    const gallery = cards.map(mapToItem)
    setGallery(gallery);
  }

  function mapToItem(card) {
    const item = { key: card._id, value: card.name } 
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