import { combineReducers } from 'redux';
import CategoryReducer from "./CategoryReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import SubSubCategoryReducer from "./SubSubCategoryReducer";
export default combineReducers({
    category: CategoryReducer,
    subcategory: SubCategoryReducer,
    sub_subcategory: SubSubCategoryReducer
})
