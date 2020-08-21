import { combineReducers } from 'redux';
import productCategoryReducer from './products/products.reducer';

export default combineReducers({
    productCategory: productCategoryReducer
});