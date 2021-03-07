import {GET_CITIES, GET_PROVINCE} from "../actions/ActionTypes";

const INIT_STATE = {
    provinces: [],
    cities: []
};

const ProvincesReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_PROVINCE:
            return {...state,provinces:action.provinces};
        case GET_CITIES:
            return {...state,cities:action.cities};

        default:
            return state;

    }
}

export default ProvincesReducer;

