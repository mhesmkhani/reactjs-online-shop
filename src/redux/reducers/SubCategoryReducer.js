import {GET_SUB_CATEGORY} from "../actions/ActionTypes";

const INIT_STATE = {
    subcategory: [],
};

const SubCategoryReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_SUB_CATEGORY:
            return {...state,subcategory:action.subcategory};

        default:
            return state;

    }
}

export default SubCategoryReducer;

