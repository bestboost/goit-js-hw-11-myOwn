import './sass/index.scss';
import PhotoApiService from './js/fetch';
import {renderResponse} from './js/gallery';

const errorMessage = "Sorry, there are no images matching your search query. Please try again.";

const refs = {
     form: document.querySelector('#search-form'),
     searchBtn: document.querySelector('.searchBtn'),
     gallery: document.querySelector('.gallery'),
     loadMoreBtn: document.querySelector('.load-more'),
};

refs.loadMoreBtn.classList.add('hidden');

refs.form.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', loadMorePhoto);

const photoApiService = new PhotoApiService;

function onSubmit(e) {
     e.preventDefault();
    
     photoApiService.query = e.currentTarget.elements.searchQuery.value; 
     
     fetchAction();
     // refs.loadMoreBtn.disabled = false;
     cleareGalleryContainer();
     refs.loadMoreBtn.classList.remove('hidden');
     photoApiService.resetPage();
     refs.form.reset();
};

function loadMorePhoto() {  
     fetchAction();
     refs.loadMoreBtn.classList.remove('hidden');
};

function fetchAction() {
     photoApiService.userFatch()
     .then(data => userResponse(data))
     .then(renderResponse)
     .catch(error => {
          console.log(error); 
          console.log(errorMessage)   
     });
};

function userResponse(data) {
     return data.hits.map(hit => hit);
};

function cleareGalleryContainer() {
     refs.gallery.innerHTML = '';
};

refs.loadMoreBtn.classList.add('hidden');
// refs.loadMoreBtn.disabled = true;

