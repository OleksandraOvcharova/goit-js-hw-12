import axios from 'axios';

export async function getImages(search, page) {
  try {
    const responce = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '49368815-3bbcd5bcef21230b847f53bd6',
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });
    return responce.data;
  } catch (error) {
    return [];
  }
}
