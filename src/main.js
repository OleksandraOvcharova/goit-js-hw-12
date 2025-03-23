import { getImages } from './js/pixabay-api';
import {
  renderImages,
  renderError,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const searchText = data.get('search-text');
  if (searchText === '') {
    return;
  }
  showLoader();
  getImages(searchText)
    .then(hits => {
      hideLoader();
      if (hits.length === 0) {
        renderError();
      } else {
        renderImages(hits);
      }
    })
    .catch(error => console.log(error));
});
