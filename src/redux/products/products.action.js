import axios from "axios";
import { tokenConfig } from "../auth/auth.actions";
import { returnErrors } from "../errors.actions";

import {
  GET_PRODUCT_CATGORY_LISTING,
  GET_FEATURED_PRODUCT,
  GET_PARENT_CATEGORY,
  GET_ADD_PRODUCT_CATEGORY,
} from "../types";
import {
  ProductCategoryUrl,
  FeaturedProductUrl,
  ParentCategoryUrl,
  AddProductUrl,
} from "../api-constants";
export const getProductCategoryList = () => (dispatch) => {
  axios
    .get(ProductCategoryUrl, tokenConfig())
    .then((res) =>
      dispatch({
        type: GET_PRODUCT_CATGORY_LISTING,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const getFeaturedProductList = () => (dispatch) => {
  axios
    .get(FeaturedProductUrl, tokenConfig())
    .then((res) => dispatch({ type: GET_FEATURED_PRODUCT, payload: res.data }))
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const getParentCategoryList = () => (dispatch) => {
  axios
    .get(ParentCategoryUrl, tokenConfig())
    .then((res) => dispatch({ type: GET_PARENT_CATEGORY, payload: res.data }))
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addProductCategory = (data) => (dispatch) => {
    axios
      .post(AddProductUrl, data, tokenConfig())
      .then((res) =>
        dispatch({ type: GET_ADD_PRODUCT_CATEGORY, payload: res.data })
      )
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};
