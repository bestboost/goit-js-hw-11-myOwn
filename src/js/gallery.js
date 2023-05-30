import {userResponse} from './fetch';
console.log("userResponse:", userResponse)
import renderCard from '../templats/photo-card';

const refs = {
     photoCard: document.querySelector('.photo-card'),
};

function renderResponse(data) {
     console.log("renderResponse  data:", data)
     const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = data;
//      console.log(data.hits.map(hit => hit)
// )
     
     const markup =  renderCard
      ({webformatURL, largeImageURL, tags, likes, views, comments, downloads});      
     refs.photoCard.innerHTML = markup;
     console.log(markup);  
  };

  renderResponse();

// export {renderResponse};