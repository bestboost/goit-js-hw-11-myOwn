import {userResponse} from './fetch';
import renderCard from '../templats/photo-card.hbs';

const refs = {
     gallery: document.querySelector('.gallery'),
};

function renderResponse(data) {
     const markup = renderCard(data);      
     refs.gallery.innerHTML = markup;
};

export {renderResponse};