// import './sass/index.scss';
import {userFatch} from './js/fetch';

const refs = {
     form: document.querySelector('#search-form'),
     photoCard: document.querySelector('.photo-card'),
};

refs.form.addEventListener('submit', onSubmit);
// refs.photoCard.hidden = true;

function onSubmit(e) {
     e.preventDefault();

     const userRequest = e.currentTarget.searchQuery.value;
     
     console.log("onSubmit  userRequest:", userRequest)
 
     refs.form.reset();
     refs.photoCard.hidden = false;
     return userFatch(userRequest);  
};
