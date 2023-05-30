import './sass/index.scss';
import {userFatch} from './js/fetch';

const refs = {
     form: document.querySelector('#search-form'),
     gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', onSubmit);
refs.gallery.hidden = true;

function onSubmit(e) {
     e.preventDefault();

     const userRequest = e.currentTarget.searchQuery.value; 
     refs.form.reset();
     refs.gallery.hidden = false;
     return userFatch(userRequest);  
};
