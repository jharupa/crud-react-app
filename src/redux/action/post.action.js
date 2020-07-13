import { UPDATE_POST, LIST_POST, DELETE_POST, ADD_POST } from "../types";
import {addPost, getPost, updatePost, deletePost} from '../../services/app.service'

export const addAction = (post) =>  (dispatch) => {
  const newPost =  addPost(post);
  dispatch({ type: ADD_POST, payload: newPost });
};

export const deleteAction = (post) =>  (dispatch) => {
  const newPost =  deletePost(post);
  dispatch({ type: DELETE_POST,  payload: newPost });
};

export const updateAction = (post) =>  (dispatch) => {
  const newPost =  updatePost(post);
  dispatch({ type: UPDATE_POST,  payload: newPost });
};

export const getPostAction = () => (dispatch) =>{
  const newPost = getPost();
  dispatch({ type: LIST_POST,  payload: newPost });
}