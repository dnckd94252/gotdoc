import { GET_LOGIN, LOGIN_ERROR, LOGOUT } from "../types";
import axios from "axios";

export const getUsers = () => async dispatch => {
  try {
    await axios.post("/api/user/login/check").then(res => {
      dispatch({
        type: GET_LOGIN,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error,
    });
  }
};

export const userLogout = () => async dispatch => {
  axios.post("/api/user/logout").then(res => {
    dispatch({
      type: LOGOUT,
      payload: {},
    });
  });
};
