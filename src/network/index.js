import axios from 'axios'
import { api_url } from './const';//vut sang day luon

export const login = (username, password) => {

    const url = `${api_url}/portal/app/login`;

    return axios.post(url, { username: username, password: password }).then(resp => resp.data).catch(error => {
        throw error;
    });
}


