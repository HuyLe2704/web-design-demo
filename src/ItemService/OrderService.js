/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { ORDER_REST_API_URL } from '~/service/url';

class OrderService {
    getListOrder() {
        return axios.get(ORDER_REST_API_URL);
    }
    createOrder(orderData) {
        return axios.post(ORDER_REST_API_URL, orderData);
    }
}

export default new OrderService();
