/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { CATEGORIES_REST_API_URL } from '~/service/url';

class CategoriesService {
    getListCategories() {
        return axios.get(CATEGORIES_REST_API_URL);
    }
}

export default new CategoriesService();
