
import axios from 'axios';
import {GET_USER_FAVORITE} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchFavorite(config) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.GetUserFavoriteUrl;
        return axios.get(url,config)
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

export const storeFavorite  = (data,config,callback) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.BaseServiceUrl+ApiUrl.SetUserFavoriteUrl;
        return axios.post(url,data,config).then(response => {
           message = response.data.message;
           callback(message)
        }).catch(error => {
            message = error
            throw(error)
        })
    }
}


export const deleteFavorite  = (data,config,callback) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.BaseServiceUrl+ApiUrl.DeleteUserFavoriteUrl;
        return axios.post(url,data,config).then(response => {
            message = response.data.message;
            callback(message)
        }).catch(error => {
            message = error
            throw(error)
        })
    }
}



