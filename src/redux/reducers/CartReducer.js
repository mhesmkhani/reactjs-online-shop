import {GET_USER_CART} from "../actions/ActionTypes";

const INIT_STATE = {
    cart: [],
};

const CartReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_USER_CART:
            return {...state,cart:action.cart};
        default:
            return state;

    }

}

export default CartReducer;

