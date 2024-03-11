/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { CART_VOUCHERS_REST_API_URL } from '~/service/url';

class VoucherService {
    getVouchers() {
        return axios.get(CART_VOUCHERS_REST_API_URL);
    }
}

export default new VoucherService();
