/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { SUGGEST_ITEMS_REST_API_URL } from '~/service/url';

class SuggestItemsService {
    getListSuggestItems() {
        return axios.get(SUGGEST_ITEMS_REST_API_URL);
    }
}

export default new SuggestItemsService();
