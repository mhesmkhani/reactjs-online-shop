
import axios from 'axios';
import {GET_CITIES, GET_PROVINCE} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";

export function fetchProvinces() {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.GetProvinceUrl;
        return axios.get(url)
            .then(response => {
                dispatch(getProvince(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const getProvince = (provinces) => {
    return {
        type: GET_PROVINCE,
        provinces,
    }
}


export function fetchCities(data) {
    return dispatch => {
        const url = ApiUrl.BaseServiceUrl+ApiUrl.GetCitiesUrl;
        return axios.post(url,data)
            .then(response => {
                dispatch(getCity(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

const getCity = (cities) => {
    return {
        type: GET_CITIES,
        cities,
    }
}

