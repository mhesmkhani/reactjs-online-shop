
import axios from 'axios';
import {GET_USER_CART, GET_USER_FAVORITE} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchCarts(config) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.GetUserCartUrl;
        return axios.get(url,config)
            .then(response => {
                dispatch(setCartList(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const setCartList = (cart) => {
    return {
        type: GET_USER_CART,
        cart,
    }
}

export const storeCart = (data,config) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.BaseServiceUrl+ApiUrl.SetUserCartUrl;
        return axios.post(url,data,config).then(response => {
           message = response.data.message;
           return message
        }).catch(error => {
            message = error
            throw(error)
        })
    }
}


export const deleteCart  = (data,config) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.BaseServiceUrl+ApiUrl.DeleteUserCartUrl;
        return axios.post(url,data,config).then(response => {
            message = response.data.message;
            return message
        }).catch(error => {
            message = error
            throw(error)
        })
    }
}

export const updateCart  = (data,config) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.BaseServiceUrl+ApiUrl.UpdateUserCartUrl;
        return axios.post(url,data,config).then(response => {
            message = response.data.message;
            return message
        }).catch(error => {
            message = error
            throw(error)
        })
    }
}



