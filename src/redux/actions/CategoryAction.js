
import axios from 'axios';
import {GET_CATEGORY} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";
import httpService from "../../Config/Http.service";

export function fetchCategory() {
    return dispatch => {
        const url = ApiUrl.GetAllCategoryUrl;
        return httpService.httpGet(url)
            .then(response => {
                if(response !== undefined){
                    dispatch(getCategory(response.data.data));
                }
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

