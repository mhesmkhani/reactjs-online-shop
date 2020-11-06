import {USER_LOGIN} from "../actions/ActionTypes";

const INIT_STATE = {
    userdata: [],
};

const AuthReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case USER_LOGIN:
            return {...state,uesrinfo:action.uesrinfo};

        default:
            return state;

    }
}

export default AuthReducer;

