import {GET_API_TOKEN, SET_ERROR, USER_LOGIN} from "../actions/ActionTypes";

const INIT_STATE = {
    error: [],
};

const ErrorReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case SET_ERROR:
            return {...state,error:action.error};
        default:
            return state;

    }
}

export default ErrorReducer;

