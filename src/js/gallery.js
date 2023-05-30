import {userResponse} from './fetch';
import renderCard from '../templats/photo-card.hbs';

const refs = {
     photoCard: document.querySelector('.photo-card'),
};

function renderResponse(data) {
     const markup = renderCard(data);      
     refs.photoCard.innerHTML = markup;
};

export {renderResponse};