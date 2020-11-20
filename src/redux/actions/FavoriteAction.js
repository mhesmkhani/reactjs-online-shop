
import axios from 'axios';
import {GET_USER_FAVORITE} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchFavorite(id) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.UserFavoriteUrl;
        return axios.post(url+id)
            .then(response => {
                dispatch(setFavoriteList(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const setFavoriteList = (favorite) => {
    return {
        type: GET_USER_FAVORITE,
        favorite,
    }
}




