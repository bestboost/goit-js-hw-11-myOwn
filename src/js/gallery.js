import {userFatch} from './fetch';
import renderCard from './photo-card';

const refs = {
     gallery: document.querySelector('.gallery'),
};

function renderResponse(data) {
     const markup =  data.hits.map(hit => {
     const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = hit;      
     //  console.log(webformatURL, largeImageURL, tags, likes, views, comments, downloads);   

    })
  };

export {renderResponse};