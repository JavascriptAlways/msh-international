import axios from "axios";
import { returnErrors } from "../errors.actions";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../types";
import { loginUrl } from "../api-constants";
import { ToastsStore } from "react-toasts";

// Login User
export const login = ({ username, password }) => (dispatch) => {
  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // Request body
  const body = JSON.stringify({ username, password });
  axios
    .post(loginUrl, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      ToastsStore.error("Invalid Username/Password");
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// setup config/headers and token
export const tokenConfig = () => {
  // Get token from local storage
  const token = localStorage.getItem("token");

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
