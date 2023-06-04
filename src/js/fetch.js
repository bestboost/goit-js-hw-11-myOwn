const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29692752-5f9a27c26e6deec7970509d3f';
const searchParams = new URLSearchParams({
     _image_type: "photo",
     _orientation: "horizontal",
     _safesearch: true,
   }); 
const finishMessage = "We're sorry, but you've reached the end of search results.";

export default class PhotoApiService {
  constructor(){
   this.userRequest = '';
   this.page = 1;
   this.per_page = 5;
  }

async userFatch(){ 
  const url = `${BASE_URL}?key=${KEY}&q=${this.userRequest}&${searchParams}&per_page=${this.per_page}&page=${this.page}`;
 
  const response = await fetch (url)
  const data = await response.json()
    this.checkNumberOfPhoto(data)
    this.loadMorePage()
  return data
};

loadMorePage(){
  this.page += 1;  
};

checkNumberOfPhoto(data){
  console.log("PhotoApiService  checkNumberOfPhoto  data:", data)
  if(this.page > data.totalHits / this.per_page) {
    alert(finishMessage);
  
 }; 
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



