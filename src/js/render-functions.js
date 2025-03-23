import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const modals = new SimpleLightbox('a.gallery-link', { captionsData: 'alt' });
const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('span.loader');

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

export function renderError() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

export function showLoader() {
  gallery.innerHTML = '';
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
