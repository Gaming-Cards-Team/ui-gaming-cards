import dotenv from "dotenv";
import { GET } from '../util/constant';
dotenv.config({});

const productGalleryManagerClient = { 
    
    getStarWarsCardsPaginated: async (page, limit) => {
        const url = `${process.env.REACT_APP_PRODUCT_GALLERY_MANAGER_URL}api/v1/cards?page=${page}&limit=${limit}`;
        console.log(url)
        console.log(process.env.NODE_ENV)
        return fetch(url, {method: GET,})
            .then(res => { return res.json() } ); 
    },

    getStarWarsCard: async (cardId) => {
        const url = `${process.env.REACT_APP_PRODUCT_GALLERY_MANAGER_URL}api/v1/card?cardId=${cardId}`;
        console.log(url)
        return fetch(url, {method: GET,})
            .then(res => { return res.json() } );
    }
}

export default productGalleryManagerClient