
import {  GET_USER_PROFILE } from './../const/index';
  
  
  const initialState = {
    userprofile: {},
    postprofile:[]
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USER_PROFILE:
        return {
          ...state,
          userprofile:payload.user,
          postprofile:payload.posts
        };

        default:
          return state;
    }}