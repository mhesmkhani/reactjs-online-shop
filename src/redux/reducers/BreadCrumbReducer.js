import {GET_BREAD_CRUMB} from "../actions/ActionTypes";

const INIT_STATE = {
    breadCrumb: [],
};

const BreadCrumbReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_BREAD_CRUMB:
            return {...state,breadCrumb:action.breadCrumb};
        default:
            return state;

    }
}

export default BreadCrumbReducer;

