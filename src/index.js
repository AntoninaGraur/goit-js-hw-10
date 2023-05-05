import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import 
// const DEBOUNCE_DELAY = 300;

// const searchInput = document.querySelector('#search-box');
// searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


// function onSearch(event) {
//   const searchQuery = event.target.value.trim();
//   if (!searchQuery) {
//     clearSearchResults();
//     return;
//   }
//   fetchCountries(searchQuery)
//     .then(countries => {
//       if (countries.length > 10) {
//        Notiflix.Report.info('Too many matches found. Please enter a more specific name.');
//         clearSearchResults();
//       } else if (countries.length >= 2 && countries.length <= 10) {
//         renderCountryList(countries);
//       } else if (countries.length === 1) {
//         renderCountryCard(countries[0]);
//       } else {
//         Notiflix.Report.failure('Oops, there is no country with that name.');
//         clearSearchResults();
//       }
//     });
// }
