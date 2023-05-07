

import Notiflix from "notiflix";

function fetchCountries(name) {
  
 const BASE_URL = `https://restcountries.com/v3.1/all`;
  console.log(BASE_URL);
  
  
  const url = `${BASE_URL}/${name}?fields=name,capital,languages,population,flag`;
  console.log(url);

  return fetch(url)
    .then(res => {
      if (!res.ok) {
      trow new Error('Not found');
      }
      const result = res.json();
      return result;
    })
    .catch(err => {
    Notiflix.Notify.failure('Oops, there is no country whith that name')
  })
  
}