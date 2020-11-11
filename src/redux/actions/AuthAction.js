
import axios from 'axios';
import {GET_API_TOKEN, USER_LOGIN} from "./ActionTypes";

export const ExpireToken = (config,callback) => {
        let message = '';

}

export const SetApiToken = (token) => {
    return dispatch => {
         dispatch(getApiToken(token));
    }
}

export const ReceiveCode = (data,callback) => {
    return dispatch => {
        let message = '';
        const url = 'http://127.0.0.1:8000/api/user/register';
        return axios.post(url, data).then(response => {
            dispatch(getApiToken(response.data.api_token));
            message = response.data.message;
            callback(message);
        }).catch(error => {
            message = error
            callback(message);
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
        const url = 'http://127.0.0.1:8000/api/user/verifyAccount';
        return axios.post(url, data,config).then(response => {
            message = response.data.message;
            callback(message);
        }).catch(error => {
            message = error
            callback(message);
            throw(error)
        })
    }
}

export const CreatePassword = (data,config,callback) => {
    return dispatch => {
        let message = '';
        const url = 'http://127.0.0.1:8000/api/user/makePassword';
        return axios.post(url, data,config).then(response => {
            message = response.data.message;
            callback(message);
        }).catch(error => {
            message = error
            callback(message);
            throw(error)
        })
    }
}

export const UserLogin = (data,callback) => {
    return dispatch => {
        let message = '';
        let apiToken = '';
        const url = 'http://127.0.0.1:8000/api/user/login';
        return axios.post(url, data).then(response => {
            dispatch(loginSuccess(response.data));
            message = 'success';
            if(response.data.message === 'success'){
                apiToken = response.data.data.api_token
            }
            callback(message,apiToken);
        }).catch(error => {
            message = 'error';
            callback(message);
            throw(error)
        })
    }
}

const loginSuccess = (userInfo) => {
    return {
        type: USER_LOGIN,
        userInfo
    }
}
