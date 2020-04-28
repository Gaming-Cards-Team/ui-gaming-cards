import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const getStarWarsCardsPaginated = async (page, limit) => {
  const url = `${process.env.PRODUCT_GALLERY_MANAGER_URL}cards`;
  console.log(url)
  const response = await fetch(url, {
    method: "GET",
  });
  const cardsResponse = await response.json();
  return cardsResponse;
}

module.exports.getStarWarsCardsPaginated = getStarWarsCardsPaginated