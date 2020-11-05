import {GET_CATEGORY} from "../actions/ActionTypes";

const INIT_STATE = {
    category: [],
};

const CategoryReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_CATEGORY:
            return {...state,category:action.category};

        default:
            return state;

    }
}

export default CategoryReducer;

