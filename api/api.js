import API_CONFIG from '../config.js'

export const fetchImages = async (query) => {

    return fetch(API_CONFIG.API_URL + '&query=' + query)
        .then((response) => response.json());

}