
import axios from 'axios';
import {GET_BREAD_CRUMB} from "./ActionTypes";

export function getBreadCrumb($id) {
    return dispatch => {
        let data = []
        return axios.post('http://127.0.0.1:8000/api/category/breadcrumb?id='+$id)
            .then(response => {
                data = response.data.data;
                dispatch(setBreadCrumb(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const setBreadCrumb = (breadCrumb) => {
    return {
        type: GET_BREAD_CRUMB,
        breadCrumb,
    }
}

