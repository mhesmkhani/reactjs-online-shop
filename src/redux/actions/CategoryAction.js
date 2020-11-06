
import axios from 'axios';
import {GET_CATEGORY} from "./ActionTypes";

export function fetchCategory() {
    return dispatch => {
        return axios.get('http://127.0.0.1:8000/api/category/all')
            .then(response => {
                dispatch(getCategory(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const getCategory = (category) => {
    return {
        type: GET_CATEGORY,
        category,
    }
}

