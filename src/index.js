import './sass/index.scss';
import API from './js/fetch';
import {renderResponse} from './js/gallery';

const errorMessage = "Sorry, there are no images matching your search query. Please try again.";

const refs = {
     form: document.querySelector('#search-form'),
     gallery: document.querySelector('.gallery'),
     loadMoreBtn: document.querySelector('.load-more'),
};

refs.form.addEventListener('submit', onSubmit);
refs.gallery.hidden = true;
refs.loadMoreBtn.hidden = true;

function onSubmit(e) {
     e.preventDefault();

     const userRequest = e.currentTarget.searchQuery.value; 
  
     API.userFatch(userRequest)
     .then(data => {return data})
     .then(data => userResponse(data))
     .then(renderResponse)
     .catch(error => {
          console.log(error); 
          console.log(errorMessage)   
     });

     refs.form.reset();
     refs.gallery.hidden = false;
};

function userResponse(data) {
 return data.hits.map(hit => hit);
};



