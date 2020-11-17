import { combineReducers } from 'redux';
import CategoryReducer from "./CategoryReducer";
import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import SingleProductReducer from "./SingleProductReducer";

export default combineReducers({
    category: CategoryReducer,
    auth: AuthReducer,
    search: SearchReducer,
    singleProduct: SingleProductReducer
})
