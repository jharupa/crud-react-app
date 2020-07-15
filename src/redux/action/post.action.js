import { LIST_POST_INIT, LIST_POST_FAIL, LIST_POST_SUCCESS, ADD_POST_INIT, ADD_POST_SUCCESS, ADD_POST_FAIL, UPDATE_POST_INIT, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL, DELETE_POST_INIT, DELETE_POST_SUCCESS, DELETE_POST_FAIL } from "../types";
import { fetchPosts, addPost, deletePost, updatePost } from "../../services/api.service";

export const addAction = (post) => async (dispatch) => {
  dispatch({ type: ADD_POST_INIT });
  const res = await addPost(post);
  if (res && res.data) {
    dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: ADD_POST_FAIL, payload: res.data });
  }
}
export const updateAction = (post) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_INIT });
  const res = await updatePost(post);
  if (res && res.data) {
    dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: UPDATE_POST_FAIL, payload: res.data });
  }
}
export const deleteAction = (post) => async (dispatch) => {
  dispatch({ type: DELETE_POST_INIT });
  const res = await deletePost(post);
  if (res && res.data) {
    dispatch({ type: DELETE_POST_SUCCESS, payload: post });
  } else {
    dispatch({ type: DELETE_POST_FAIL, payload: null });
  }
}
export const getPostAction = () => async (dispatch) => {
  dispatch({ type: LIST_POST_INIT });
  const res = await fetchPosts();
  if (res && res.data) {
    dispatch({ type: LIST_POST_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: LIST_POST_FAIL, payload: res.data });
  }
}