import axios from "axios";

import {
    GET_PRODUCT_CATGORY_LISTING_SUCCESS,
    GET_PRODUCT_CATGORY_LISTING_ERROR,
    GET_FEATURED_PRODUCT_SUCCESS,
    GET_FEATURED_PRODUCT_ERROR,
    GET_PARENT_CATEGORY_SUCCESS,
    GET_PARENT_CATEGORY_ERROR
} from '../types';
import { ProductCategoryUrl, FeaturedProductUrl, ParentCategoryUrl } from '../api-constants';
export const getProductCategoryList = () => {
    return (dispatch) => {
        axios.get(ProductCategoryUrl)
            .then(res => dispatch({ type: GET_PRODUCT_CATGORY_LISTING_SUCCESS, payload: res.data }))
            .catch(error => dispatch({ type: GET_PRODUCT_CATGORY_LISTING_ERROR, payload: { status: 'error', msg: error } }));
    }
};
export const getFeaturedProductList = () => {
    return (dispatch) => {
        axios.get(FeaturedProductUrl)
            .then(res => dispatch({ type: GET_FEATURED_PRODUCT_SUCCESS, payload: res.data }))
            .catch(error => dispatch({ type: GET_FEATURED_PRODUCT_ERROR, payload: { status: 'error', msg: error } }));
    }
};
export const getParentCategoryList = () => {
    return (dispatch) => {
        axios.get(ParentCategoryUrl)
            .then(res => dispatch({ type: GET_PARENT_CATEGORY_SUCCESS, payload: res.data }))
            .catch(error => dispatch({ type: GET_PARENT_CATEGORY_ERROR, payload: { status: 'error', msg: error } }));
    }
};