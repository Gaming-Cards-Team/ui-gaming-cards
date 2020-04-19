import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import {PRODUCT_GALLERY_MANAGER} from './util/constant'

const App = () => {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
      
      fetch(PRODUCT_GALLERY_MANAGER)
      .then(res => res.json())
      .then(readResponse)
      .catch(console.log)
  });

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
      Cards:
      <MessageList data={gallery} />
    </div>
  );
};

export default App;