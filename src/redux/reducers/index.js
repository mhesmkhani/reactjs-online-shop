import { combineReducers } from 'redux';
import CategoryReducer from "./CategoryReducer";
import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import SingleProductReducer from "./SingleProductReducer";
import BreadCrumbReducer from "./BreadCrumbReducer";
import FavoriteReducer from "./FavoriteReducer";
import CartReducer from "./CartReducer";
import ProvincesReducer from "./ProvincesReducer";

export default combineReducers({
    category: CategoryReducer,
    auth: AuthReducer,
    search: SearchReducer,
    singleProduct: SingleProductReducer,
    breadCrumb:BreadCrumbReducer,
    favorite:FavoriteReducer,
    cart:CartReducer,
    provinces: ProvincesReducer,
})
