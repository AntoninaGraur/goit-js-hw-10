



// export function fetchCountries(name) {
  
//  const BASE_URL = `https://restcountries.com/v3.1`;

  
  
//   const url = `${BASE_URL}/${name}?fields=name,capital,languages,population,flag`;


//   return fetch(url)
//     .then(res => {
//       if (!res.ok) {
//       throw new Error('Not found');
//       }
//       const result = res.json();
//       return result;
//     })
// }

// fetchCountries.js

export const fetchCountries = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => data)
    // .catch((error) => {
    //   throw error;
    // });
};
