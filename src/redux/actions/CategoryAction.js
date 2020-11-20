
import axios from 'axios';
import {GET_CATEGORY} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchCategory() {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.GetAllCategoryUrl;
        return axios.get(url)
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

