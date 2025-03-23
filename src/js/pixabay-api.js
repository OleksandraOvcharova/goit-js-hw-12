import axios from 'axios';

export function getImages(search) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49368815-3bbcd5bcef21230b847f53bd6',
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data: { hits } }) => {
      return hits;
    })
    .catch(() => {
      return [];
    });
}
