import {GET_CLEAR_SINGLE_PRODUCT, GET_SINGLE_PRODUCT} from "../actions/ActionTypes";

const INIT_STATE = {
    singleProduct: [],
};

const SingleProductReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_SINGLE_PRODUCT:
            return {...state,singleProduct:action.singleProduct};

        case GET_CLEAR_SINGLE_PRODUCT:
            return {singleProduct:action.clearSingleProduct};

        default:

            return state;

    }
}

export default SingleProductReducer;

