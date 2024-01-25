/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { CAROUSEL_ITEMS_REST_API_URL } from '~/service/url';

class CarouselItemsService {
    getListCarouselItems() {
        return axios.get(CAROUSEL_ITEMS_REST_API_URL);
    }
}

export default new CarouselItemsService();
