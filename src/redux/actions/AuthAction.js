
import axios from 'axios';
import { USER_LOGIN} from "./ActionTypes";

export const UserLogin = (data) => {
    console.log(data)
    return dispatch => {
        const url = 'http://127.0.0.1:8000/api/user/login';
        return axios.post(url, data).then(response => {
            dispatch(loginSuccess(response.data));
        }).catch(error => {
            throw(error)
        })
    }
}

const loginSuccess = (uesrinfo) => {
    return {
        type: USER_LOGIN,
        uesrinfo
    }
}
