import { getImages } from './js/pixabay-api';
import {
  renderImages,
  renderEmptyFormNotification,
  renderAPIErrorNotification,
  renderLastPageNotification,
  renderError,
  clearGallery,
  scrollGallery,
  showLoader,
  hideLoader,
  showLoadButton,
  hideLoadButton,
} from './js/render-functions';

let page = 1;
let search = '';
const loadButton = document.querySelector('button.load_button');

async function updateGallery() {
  showLoader();
  const { hits, totalHits, error } = await getImages(search, page);

  hideLoader();
  if (!!error) {
    renderAPIErrorNotification(error);
  } else if (hits.length === 0) {
    renderError();
  } else {
    renderImages(hits);
    if (page > 1) {
      scrollGallery();
    }
    const totalPages = Math.ceil(totalHits / 15);
    if (page == totalPages) {
      hideLoadButton();
      renderLastPageNotification();
    } else {
      showLoadButton();
    }
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', async event => {
  event.preventDefault();

  hideLoadButton();
  const data = new FormData(event.target);
  const searchText = data.get('search-text').trim();
  if (searchText === '') {
    renderEmptyFormNotification();
    return;
  }

  search = searchText;
  page = 1;

  clearGallery();
  updateGallery();
});

loadButton.addEventListener('click', async event => {
  page += 1;
  updateGallery();
});
