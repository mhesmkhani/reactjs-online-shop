
import axios from 'axios';
import {GET_API_TOKEN, USER_LOGIN} from "./ActionTypes";
import ApiUrl from '../../Config/ApiUrls'
import httpService from "../../Config/Http.service";
export const ExpireToken = (config,callback) => {
        let message = '';
}

export const SetApiToken = (token) => {
    return dispatch => {
         dispatch(getApiToken(token));
    }
}
export function getUserCheck(config,callback) {
    return dispatch => {
        const url = ApiUrl.UserCheckUrl;
        return httpService.httpGet(url,config)
            .then(response => {
                if(response !== undefined){
                    callback(response.data.message)
                }
            }).catch(error => {
                throw(error);
            });
    }
}

export const ReceiveCode = (data,callback) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.UserRegisterUrl;
        return httpService.httpPost(url, data).then(response => {
            console.log(response)
          if(response !== undefined){
              if(response.message === "success"){
                  dispatch(getApiToken(response.api_token));
                  message = response.message;
                  callback(message);
              }
          }
        }).catch(error => {
            throw(error)
        })
    }
}
const getApiToken = (apiToken) => {
    return {
        type: GET_API_TOKEN,
        apiToken
    }
}

export const VerifyCode = (data,config,callback) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.VerifyAccountUrl;
        return httpService.httpPost(url, data,config).then(response => {
            if(response !== undefined){
                message = response.message;
                callback(message);
            }
        }).catch(error => {

            throw(error)
        })
    }
}

export const CreatePassword = (data,config,callback) => {
    return dispatch => {
        let message = '';
        const url = ApiUrl.MakePasswordUrl;
        return httpService.httpPost(url, data,config).then(response => {
            if(response !== undefined){
                message = response.message;
                callback(message);
            }

        }).catch(error => {
            throw(error)
        })
    }
}

export const UserLogin = (data,callback) => {
    return dispatch => {
        let message = '';
        let apiToken = '';
        const url = ApiUrl.UserLoginUrl;
        return httpService.httpPost(url,data).then(response => {
            if(response !== undefined){
                dispatch(loginSuccess(response.data));
                message =  response.message;
                apiToken = response.data.api_token
                callback(message,apiToken);
            }

        }).catch(error => {

            throw(error)
        })
    }
}

export const loginSuccess = (userInfo) => {
    return {
        type: USER_LOGIN,
        userInfo
    }
}


