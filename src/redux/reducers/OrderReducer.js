import {GET_USER_ORDERS} from "../actions/ActionTypes";

const INIT_STATE = {
    orders: [],
};

const OrderReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_USER_ORDERS:
            return {...state,orders:action.orders};
        default:
            return state;

    }
}

export default OrderReducer;

