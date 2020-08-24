import axios from "axios";

import {
    GET_LANGUAGE_SUCCESS,
    GET_LANGUAGE_ERROR,
} from '../types';
import { LanguageUrl } from '../api-constants';
export const getLanuageList = () => {
    return (dispatch) => {
        axios.get(LanguageUrl)
            .then(res => dispatch({ type: GET_LANGUAGE_SUCCESS, payload: res.data }))
            .catch(error => dispatch({ type: GET_LANGUAGE_ERROR, payload: { status: 'error', msg: error } }));
    }
};