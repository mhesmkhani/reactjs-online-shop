import { GET_SUB_SUB_CATEGORY} from "../actions/ActionTypes";

const INIT_STATE = {
    sub_subcategory: [],
};

const SubSubCategoryReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_SUB_SUB_CATEGORY:
            return {...state,sub_subcategory:action.sub_subcategory};

        default:
            return state;

    }
}

export default SubSubCategoryReducer;

