import axios, { getResponse } from "../../../utils/axios";

export const getUsers = async () => {
    return axios.get('users').then(getResponse);
}