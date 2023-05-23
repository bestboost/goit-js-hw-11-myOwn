import './sass/index.scss';
import {fetchResponse} from './js/fetch'

const refs = {
     form: document.querySelector('#search-form'),
     input: document.querySelector('.input'),
     searchBtn: document.querySelector('.searchBtn'),
};

refs.form.addEventListener('submit', onSubmit);

let userRequest = '';
function onSubmit(e) {
     e.preventDefault();
     userRequest = e.currentTarget.searchQuery.value;
     console.log("onSubmit  userRequest:", userRequest)
   return fetchResponse(userRequest);
};

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29692752-5f9a27c26e6deec7970509d3f';
// const searchParams = new URLSearchParams({
//      _image_type: "photo",
//      _orientation: "horizontal",
//      _safesearch: true,
//    });
// const url = `${BASE_URL}?key=${KEY}&q=${userRequest}&${searchParams}`;
// const errorMessage = "Sorry, there are no images matching your search query. Please try again.";

// fetch (url)
// .then(r => r.json())
// .then(data => fatchResponse(data))
// .catch(error => {
//      console.log(error); 
//      console.log(errorMessage);
// });

// function fatchResponse(data) {

//     const markup =  data.hits.map(hit => {
//      const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = hit;      
//      // console.log(webformatURL, largeImageURL, tags, likes, views, comments, downloads);   
//       }
//       )
//  }