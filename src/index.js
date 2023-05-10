
// import './css/styles.css';

// import { fetchCountries } from './fetchCountries.js';

// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';

// const searchBox = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// const DEBOUNCE_DELAY = 600;

// searchBox.addEventListener('input',debounce((event) => {
//     const searchQuery = event.target.value.trim();

//     if (searchQuery !== '') {
//       fetchCountries(searchQuery)
//         .then((countries) => {
//           if (countries.length > 10) {
//             Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//             countryList.innerHTML = '';
//             countryInfo.innerHTML = '';
//           } else if (countries.length > 1) {
//             renderCountryList(countries);
//             countryInfo.innerHTML = '';
//           } else if (countries.length === 1) {
//             renderCountryInfo(countries[0]);
//             countryList.innerHTML = '';
//           } else {
//             Notiflix.Notify.failure('Oops, there is no country with that name');
//             countryList.innerHTML = '';
//             countryInfo.innerHTML = '';
//           }
//         })
//         .catch((error) => {
//           Notiflix.Notify.failure('Oops, there is no country with that name');
//           countryList.innerHTML = '';
//           countryInfo.innerHTML = '';
//         });
//     } else {
//       countryList.innerHTML = '';
//       countryInfo.innerHTML = '';
//     }
//   }, DEBOUNCE_DELAY),
// );

// function renderCountryList(countries) {
//   countryList.innerHTML = countries
//     .map(
//       (country) =>
//         `<li><img src="${country.flags.svg}" alt="${country.name.official}" width="30"> ${country.name.official}</li>`,
//     )
//     .join('');
// }

// function renderCountryInfo(country) {
//   countryInfo.innerHTML = `
//     <h1>${country.name.official}</h1>
//     <p class="text"><span class="text">Capital:</span> ${country.capital}</p>
//     <p class="text"><span class="text">Population:</span> ${country.population.toLocaleString()}</p>
//     <p class="text"><span class="text">Languages:</span> ${Object.values(country.languages).join(', ')}</p>
//     <img src="${country.flags.svg}" alt="${country.name.official}" width="200">
//   `;
// }
import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 600;

searchBox.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput(event) {
  const searchQuery = event.target.value.trim();

  if (searchQuery === '') {
    resetPage();
    return;
  }

  fetchCountries(searchQuery)
    .then((countries) => {
      if (countries.length > 10) {
        Notiflix.Report.info('Too many matches found.', 'Please enter a more specific name.', 'Ok');
      } else if (countries.length > 1) {
        renderCountryList(countries);
      } else if (countries.length === 1) {
        renderCountryInfo(countries[0]);
      } else {
        Notiflix.Report.failure('Oops', 'There is no country with that name', 'Ok');
      }
    })
    .catch((error) => {
     Notiflix.Report.failure('Oops', 'There is no country with that name', 'Ok');
      resetPage();
    });
}

function resetPage() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function renderCountryList(countries) {
  countryList.innerHTML = countries
    .map((country) => `<li><img src="${country.flags.svg}" alt="${country.name.official}" width="30"> ${country.name.official}</li>`)
    .join('');
  countryInfo.innerHTML = '';
}

function renderCountryInfo(country) {
  countryInfo.innerHTML = `
    <h1>${country.name.official}</h1>
    <p class="text"><span class="text">Capital:</span> ${country.capital}</p>
    <p class="text"><span class="text">Population:</span> ${country.population.toLocaleString()}</p>
    <p class="text"><span class="text">Languages:</span> ${Object.values(country.languages).join(', ')}</p>
    <img src="${country.flags.svg}" alt="${country.name.official}" width="200">
  `;
  countryList.innerHTML = '';
}
