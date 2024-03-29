/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { USERS_RESGISTER_REST_API_URL, USERS_LOGIN_REST_API_URL, ORDER_INFO_REST_API_URL } from '~/service/url';

class UsersRegisterService {
    getListUsers() {
        return axios.get(USERS_RESGISTER_REST_API_URL);
    }
    addUser(info) {
        return axios.post(USERS_RESGISTER_REST_API_URL, info);
    }
    loginUser(loginData) {
        return axios.post(USERS_LOGIN_REST_API_URL, loginData);
    }
    saveCustomer(currentUsername, data) {
        return axios.post(`${ORDER_INFO_REST_API_URL}/${currentUsername}/customer-info`, data);
    }
}

export default new UsersRegisterService();
