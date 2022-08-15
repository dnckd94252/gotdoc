import { GET_LOGIN, LOGIN_ERROR , LOGOUT} from "../types";

const initialState = {
  users: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN_ERROR:
      return {
        users: null,
      };
    case LOGOUT:
      return {
        users: null,
      };
    default:
      return state;
  }
}