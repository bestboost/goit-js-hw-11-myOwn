const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29692752-5f9a27c26e6deec7970509d3f';
const searchParams = new URLSearchParams({
     _image_type: "photo",
     _orientation: "horizontal",
     _safesearch: true,
   });

function userFatch(userRequest){ 
  const url = `${BASE_URL}?key=${KEY}&q=${userRequest}&${searchParams}&per_pafe=40`;
 
  return fetch (url).then(response => response.json())};

export default {userFatch};


