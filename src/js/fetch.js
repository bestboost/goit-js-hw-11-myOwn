const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29692752-5f9a27c26e6deec7970509d3f';
const searchParams = new URLSearchParams({
     _image_type: "photo",
     _orientation: "horizontal",
     _safesearch: true,
   }); 

export default class PhotoApiService {
  constructor(){
   this.userRequest = '';
   this.page = 1;
  }

  userFatch(){ 
  const url = `${BASE_URL}?key=${KEY}&q=${this.userRequest}&${searchParams}&per_page=4&page=${this.page}`;
 
  return fetch (url)
  .then(response => response.json())
  .then(data => {this.loadMorePage()
  return data})
};


loadMorePage(){
  this.page += 1;
};

resetPage(){
  this.page = 1;
};

get query() {
  return this.userRequest;
};

set query(newQuery) {
   this.userRequest = newQuery;
};
};



