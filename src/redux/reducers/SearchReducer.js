import {GET_SEARCH_PRODUCT, GET_SEARCH_RESULT, SET_SEARCH_VALUE} from "../actions/ActionTypes";

const INIT_STATE = {
    searchProduct: [],
    searchResult: [],
};

const SearchReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_SEARCH_PRODUCT:
            return {...state,searchProduct:action.searchProduct};
        case GET_SEARCH_RESULT:
            return {...state,searchResult:action.searchResult};
        default:
            return state;

    }
}

export default SearchReducer;

