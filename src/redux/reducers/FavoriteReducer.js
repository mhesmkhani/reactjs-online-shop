import {GET_USER_FAVORITE} from "../actions/ActionTypes";

const INIT_STATE = {
    favorite: [],
};

const FavoriteReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_USER_FAVORITE:
            return {...state,favorite:action.favorite};
        default:
            return state;

    }
}

export default FavoriteReducer;

