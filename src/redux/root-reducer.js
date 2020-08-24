import { combineReducers } from 'redux';
import { productCategoryReducer } from './products/products.reducer';
import { languageReducer } from './languages/language.reducer';

export default combineReducers({
    productCategory: productCategoryReducer,
    language: languageReducer
});