
import axios from 'axios';
import {GET_BREAD_CRUMB} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function getBreadCrumb(id) {
    return dispatch => {
        let data = []
        const url = ApiUrl.BaseServiceUrl+ApiUrl.CategoryBreadCrumbUrl;
        return axios.post(url+id)
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

