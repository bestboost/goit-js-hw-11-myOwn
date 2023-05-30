import {userResponse} from './fetch';
import renderCard from '../templats/photo-card.hbs';

const refs = {
     photoCard: document.querySelector('.photo-card'),
};

function renderResponse(responseData) {
     console.log("renderResponse:", responseData)
     const markup = renderCard(responseData);      
     refs.photoCard.innerHTML = markup;
     console.log("renderResponse  markup:", markup)
  };

export {renderResponse};