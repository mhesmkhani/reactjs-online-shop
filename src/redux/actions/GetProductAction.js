
import axios from 'axios';
import {} from "./ActionTypes";
import {GET_SINGLE_PRODUCT} from "./ActionTypes";
import {GET_CLEAR_SINGLE_PRODUCT} from "./ActionTypes";

export function fetchSingleProduct(slug) {
    return dispatch => {
        return axios.post('http://127.0.0.1:8000/api/products/show/?q='+slug)
            .then(response => {
                dispatch(setSingleProdcut(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const setSingleProdcut = (singleProduct) => {
    return {
        type: GET_SINGLE_PRODUCT,
        singleProduct,
    }
}

export function getSingleProductData(value) {
    return dispatch => {
         this.fetchSingleProduct(value)
    }
}


