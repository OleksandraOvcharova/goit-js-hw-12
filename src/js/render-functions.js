import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const modals = new SimpleLightbox('a.gallery-link', { captionsData: 'alt' });
const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('div.loader');
const loadButton = document.querySelector('button.load_button');

export function renderImages(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}">
          <ul class="gallery-list">
          <li class="gallery-list-item">
          <p class="gallery-list-item-text">Likes</p>
          <p class="gallery-list-item-value">${likes}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Views</p>
          <p class="gallery-list-item-value">${views}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Comments</p>
          <p class="gallery-list-item-value">${comments}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Downloads</p>
          <p class="gallery-list-item-value">${downloads}</p>
          </li>
          </ul></a></li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  modals.refresh();
}

export function renderLastPageNotification() {
  iziToast.message({
    message: 'We are sorry, but you have reached the end of search results.',
    position: 'topRight',
  });
}

export function renderError() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}
export function clearGallery() {
  gallery.innerHTML = '';
}

export function scrollGallery() {
  const galleryItem = document.querySelector('li.gallery-item');
  const height = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    left: 0,
    behavior: 'smooth',
  });
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadButton() {
  loadButton.classList.remove('hidden');
}

export function hideLoadButton() {
  loadButton.classList.add('hidden');
}
