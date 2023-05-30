import {renderResponse} from './gallery';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29692752-5f9a27c26e6deec7970509d3f';
const searchParams = new URLSearchParams({
     _image_type: "photo",
     _orientation: "horizontal",
     _safesearch: true,
   });
// const url = `${BASE_URL}?key=${KEY}&q=${userRequest}&${searchParams}`;
const errorMessage = "Sorry, there are no images matching your search query. Please try again.";

function userFatch(userRequest){ 
  return fetch (`${BASE_URL}?key=${KEY}&q=${userRequest}&${searchParams}`)
.then(r => r.json())
.then(data => userResponse(data))
.then(renderResponse)
.catch(error => {
     console.log(error); 
     console.log(errorMessage);
});
};

function userResponse(data) {
 return data.hits.map(hit => hit);
};

export {userFatch};
export {userResponse};

