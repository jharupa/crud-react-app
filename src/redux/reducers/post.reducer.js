import { LIST_POST_SUCCESS, UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS, ADD_POST_SUCCESS, LIST_POST_INIT, LIST_POST_FAIL, ADD_POST_INIT, ADD_POST_FAIL, DELETE_POST_INIT, DELETE_POST_FAIL } from "../types";
import { updatePost } from "../../services/api.service";

const initialState = {
  list: null,
  loading: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // List
    case LIST_POST_INIT:
      return { ...state, list: [], loading: true };
    case LIST_POST_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case LIST_POST_FAIL:
      return { ...state, list: [], loading: false };
    // ADD
    case ADD_POST_INIT:
      return { ...state, loading: true };
    case UPDATE_POST_SUCCESS:
      const updatedPosts = state.list.map((post, index) => {
        if (post.id === action.payload.id) {
          post = action.payload;
        }
        return post;
      });
      return { ...state, list: [...updatedPosts], loading: false };
    case ADD_POST_FAIL:
      return { ...state, loading: false };
    // DELETE
    case DELETE_POST_INIT:
      return { ...state, loading: true };
    case DELETE_POST_SUCCESS:
      const oldposts = state.list;
      oldposts.forEach((post, index) => {
        if (post.id === action.payload.id) {
          oldposts.splice(index, 1);
        }
      });
      return { ...state, list: [...oldposts], loading: false };
    case DELETE_POST_FAIL:
      return { ...state, loading: false };
    // ADD
    case ADD_POST_INIT:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
      const newpost = [action.payload, ...state.list];
      return { ...state, list: [...newpost], loading: false };
    case ADD_POST_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }

};
