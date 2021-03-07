
import axios from 'axios';
import {GET_CLEAR_SINGLE_PRODUCT, GET_SEARCH_PRODUCT, GET_SEARCH_RESULT} from "./ActionTypes";
import ApiUrl from "../../Config/ApiUrls";
import httpService from "../../Config/Http.service";

export function updateFullname(data,config,callback) {
    return dispatch => {
        const url = ApiUrl.UserFullnameUpdateUrl;
        return httpService.httpPost(url,data,config)
            .then(response => {
                if(response !== undefined){
                    console.log(response.data)
                    if(response.message === "success"){
                        callback(response.data)
                    }
                }

            }).catch(error => {
                throw(error);
            });
    }
}

export function updatePhone(data,config,callback) {
    return dispatch => {
        const url = ApiUrl.UserPhoneUpdateUrl;
        return httpService.httpPost(url,data,config)
            .then(response => {
                if (response !== undefined){
                    if(response.message === "success"){
                        callback(response.data)
                    }
                }

            }).catch(error => {
                throw(error);
            });
    }
}

export function updateEmail(data,config,callback) {
    return dispatch => {
        const url = ApiUrl.UserEmailUpdateUrl;
        return httpService.httpPost(url,data,config)
            .then(response => {
                if(response !== undefined){
                    if(response.message === "success"){
                        callback(response.data)
                    }
                }

            }).catch(error => {
                throw(error);
            });
    }
}

export function updateHomePhone(data,config,callback) {
    return dispatch => {
        const url = ApiUrl.UserHomePhoneUpdateUrl;
        return httpService.httpPost(url,data,config)
            .then(response => {
                if(response !== undefined){
                    if(response.message === "success"){
                        callback(response.data)
                    }
                }

            }).catch(error => {
                throw(error);
            });
    }
}

export function updateNationalCode(data,config,callback) {
    return dispatch => {
        const url = ApiUrl.UserNationalCodeUpdateUrl;
        return httpService.httpPost(url,data,config)
            .then(response => {
                if(response !== undefined){
                    if(response.message === "success"){
                        callback(response.data)
                    }
                }

            }).catch(error => {

                throw(error);
            });
    }
}
