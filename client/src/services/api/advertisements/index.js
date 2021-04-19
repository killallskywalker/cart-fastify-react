import axios, { getResponse } from "../../../utils/axios";

/*
* Since ad blocker will block the advertisements contain , we use product as the endpoint
* to call api that return advertisement list
*/
export const getAdvertisements = async (id) => {
    return axios.get(`/products/${id}`).then(getResponse);
}