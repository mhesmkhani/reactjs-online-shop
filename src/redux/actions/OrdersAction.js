
import axios from 'axios';
import ApiUrl from "../../Config/ApiUrls";
import {GET_USER_ORDERS} from "./ActionTypes";

export function fetchOrders(data,config,callback) {
    return (dispatch, getState) => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.UserOrdersUrl;
        return axios.post(url,data,config)
            .then(response => {
                let state = getState();
                const data = {
                    state : state,
                    res: response.data
                }
                callback((data))
            }).catch(error => {
                localStorage.clear();
                window.location.href = '/';
            });
    }
}

export function addOrderProducts(data,config,callback) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.UserOrderAddUrl;
        return axios.post(url,data,config)
            .then(response => {
                callback(response.data)
            }).catch(error => {
                localStorage.clear();
                window.location.href = '/';
                throw(error);
            });
    }
}


export function fetchUserOrderProducts(config) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.GetUserOrdersProductUrl;
        return axios.get(url,config)
            .then(response => {
                dispatch(setUserOrders(response.data.data));
            }).catch(error => {
                localStorage.clear();
                window.location.href = '/';
                throw(error);
            });
    }
}

const setUserOrders = (orders) => {
    return {
        type: GET_USER_ORDERS,
        orders,
    }
}


