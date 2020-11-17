import {GET_SINGLE_PRODUCT} from "../actions/ActionTypes";

const INIT_STATE = {
    singleProduct: [],
};

const SingleProductReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_SINGLE_PRODUCT:
            return {...state,singleProduct:action.singleProduct};
        default:
            return state;

    }
}

export default SingleProductReducer;

