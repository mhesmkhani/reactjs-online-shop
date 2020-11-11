import {GET_API_TOKEN, USER_LOGIN} from "../actions/ActionTypes";

const INIT_STATE = {
    userInfo: [],
    apiToken: ''
};

const AuthReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case USER_LOGIN:
            return {...state,userInfo:action.userInfo};

        case GET_API_TOKEN:
            return {...state,apiToken:action.apiToken};

        default:
            return state;

    }
}

export default AuthReducer;

