
// export const fetchAllPosts = () => {
import axios from 'axios';
import {GET_CATEGORY, GET_SUB_CATEGORY, GET_SUB_SUB_CATEGORY} from "./ActionTypes";

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


export function fetchSubCategory() {
    return dispatch => {
        return axios.get('http://127.0.0.1:8000/api/subcategory/all')
            .then(response => {
                dispatch(getSubCategory(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const getSubCategory = (subcategory) => {
    return {
        type: GET_SUB_CATEGORY,
        subcategory,
    }
}

export function fetchSubSubCategory() {
    return dispatch => {
        return axios.get('http://127.0.0.1:8000/api/sub_subcategory/all')
            .then(response => {
                dispatch(getSubSubCategory(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const getSubSubCategory = (sub_subcategory) => {
    return {
        type: GET_SUB_SUB_CATEGORY,
        sub_subcategory,
    }
}
