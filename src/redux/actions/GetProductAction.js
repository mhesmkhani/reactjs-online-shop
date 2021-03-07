
import axios from 'axios';
import {GET_SINGLE_PRODUCT,GET_CLEAR_SINGLE_PRODUCT} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchSingleProduct(slug) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.ProductShowUrl;
        return axios.get(url+slug)
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

export function setClearSingleProduct(clearSingleProduct) {
    return {
        type: GET_CLEAR_SINGLE_PRODUCT,
        clearSingleProduct,
    }
}

