import Axios from "axios";

import axios from 'axios';
import { GET_PRODUCT_CATGORY_LISTING_SUCCESS, GET_PRODUCT_CATGORY_LISTING_ERROR } from '../types';
import { productCategoryUrl } from '../api-constants';
export const getProductCategoryList = () => {
    return (dispatch) => {
        axios.get(productCategoryUrl)
            .then(res => dispatch({ type: GET_PRODUCT_CATGORY_LISTING_SUCCESS, payload: res.data }))
            .catch(error => dispatch({ type: GET_PRODUCT_CATGORY_LISTING_ERROR, payload: { status: 'error', msg: error } }));
    }
};