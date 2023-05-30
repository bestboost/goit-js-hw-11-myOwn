import './sass/index.scss';
import {userFatch} from './js/fetch';

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
     refs.form.reset();
     refs.gallery.hidden = false;
     return userFatch(userRequest);  
};
