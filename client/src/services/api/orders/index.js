import axios, { getResponse } from "../../../utils/axios";

export const createOrder = async (data) => {
    return axios.post('orders',data).then(getResponse);
}