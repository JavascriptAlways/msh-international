import axios from "axios";
import { tokenConfig } from "../auth/auth.actions";
import { returnErrors } from "../errors.actions";

import { GET_LANGUAGE } from "../types";
import { LanguageUrl } from "../api-constants";
export const getLanuageList = () => (dispatch) => {
  axios
    .get(LanguageUrl, tokenConfig())
    .then((res) => {
      dispatch({ type: GET_LANGUAGE, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
