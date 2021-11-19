import {
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  AUTH_FAIL,
  SETLOADING,
  GET_AUTH_USER,
  LOGOUT,
  FOLLOW_USER,
} from "../const/index";

const initialState = {
  user: {},
//   token: null,
  isLoading: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SETLOADING:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        // token: payload.token,
        isLoading: false,
        isAuth: true,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        user: payload.user,
        isLoading: false,
        isAuth: true,
      };
    case AUTH_FAIL:
    case LOGOUT:
        localStorage.removeItem('token')
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        // token: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        // token: payload.token,
        isLoading: false,
        isAuth: true,
      };

      
      // case FOLLOW_USER:
      //   return {
      //     ...state,
      //     user:{...state.user.following,state.user._id}
      //   };
    default:
      return state;
  }
};
