import axios from "axios";
import { getUsers, userLogout } from "../src/actions/userAction";

export const loginCheck = async (dispatch ) => {
  await dispatch(getUsers());
};

export const logout = async (dispatch) => {
  await dispatch(userLogout());
};

export const loginAction = async () => {
  const input = document.getElementsByTagName("input");
  const val = {
    id: input.id.value,
    pw: input.pw.value,
  };
  await axios.post("/api/user/login", val);

};
