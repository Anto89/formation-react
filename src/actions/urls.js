export const FETCH_URLS = 'FETCH_URLS';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export const fetchUrls = () => async (dispatch) => {
    const response = await fetch(apiUrl);
    const photos = await response.json();

    const urls = photos.slice(10, 15).map(({ url }) => url);
    dispatch({ type: FETCH_URLS, urls });
};