import { combineReducers } from "redux";
import { productCategoryReducer } from "./products/products.reducer";
import { languageReducer } from "./languages/language.reducer";
import errorReducer from "./errors.reducer";
import authReducer from "./auth/auth.reducer";

export default combineReducers({
  productCategory: productCategoryReducer,
  language: languageReducer,
  error: errorReducer,
  auth: authReducer,
});
