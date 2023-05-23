const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29692752-5f9a27c26e6deec7970509d3f';
const errorMessage = "Sorry, there are no images matching your search query. Please try again.";

// const responseData = 
//      [webformatURL,
//      largeImageURL,
//      tags, 
//      likes,
//      views,
//      comments,
//      downloads];

fetch (`${BASE_URL}?key=${KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true`)
.then(r => r.json())
.then(data => {
         data.hits.map(hit => {
          console.log("hit:", hit.webformatURL, 
          "tags:", hit.tags)   
     })
})
.catch(error => {
     console.log(error); 
     console.log(errorMessage);
});