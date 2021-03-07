
import axios from 'axios';
import {GET_CLEAR_SINGLE_PRODUCT, GET_SEARCH_PRODUCT, GET_SEARCH_RESULT} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function searchProduct(data,callback) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.SearchProductUrl;
        const message = ''
        return axios.post(url,data)
            .then(response => {
                if (response.data.data.length === 0){
                    dispatch(setSearchResult([]));
                    callback("error")
                }else {
                    dispatch(setSearchResult(response.data.data));
                    callback("success")
                }
            }).catch(error => {
                throw(error);
            });
    }
}
const setSearchResult = (searchResult) => {
    return {
        type: GET_SEARCH_RESULT,
        searchResult,
    }
}
export function fetchSearch(search) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.CategorySearchUrl;
        return axios.get(url+search)
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

