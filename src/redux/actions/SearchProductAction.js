
import axios from 'axios';
import {GET_CLEAR_SINGLE_PRODUCT, GET_SEARCH_PRODUCT} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchSearch(search) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.CategorySearchUrl;
        return axios.post(url+search)
            .then(response => {
                dispatch(setSearchData(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const setSearchData = (searchProduct) => {
    return {
        type: GET_SEARCH_PRODUCT,
        searchProduct,
    }
}

export function getsearchValue(value) {
    return dispatch => {
         this.fetchSearch(value)
    }
}
export function setClearSingleProduct(clearSingleProduct) {
    return {
        type: GET_CLEAR_SINGLE_PRODUCT,
        clearSingleProduct,
    }
}

// const setSearchValue = (searchValue) => {
//     return {
//         type: SET_SEARCH_VALUE,
//         searchValue,
//     }
// }
//

