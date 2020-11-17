
import axios from 'axios';
import {GET_SEARCH_PRODUCT, SET_SEARCH_VALUE} from "./ActionTypes";

export function fetchSearch(search) {
    return dispatch => {
        return axios.post('http://127.0.0.1:8000/api/category/search/?q='+search)
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

// const setSearchValue = (searchValue) => {
//     return {
//         type: SET_SEARCH_VALUE,
//         searchValue,
//     }
// }
//

