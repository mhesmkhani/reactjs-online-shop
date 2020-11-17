import {GET_SEARCH_PRODUCT, SET_SEARCH_VALUE} from "../actions/ActionTypes";

const INIT_STATE = {
    searchProduct: [],
};

const SearchReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_SEARCH_PRODUCT:
            return {...state,searchProduct:action.searchProduct};
        default:
            return state;

    }
}

export default SearchReducer;

