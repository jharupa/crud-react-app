import { LIST_POST, UPDATE_POST, DELETE_POST, ADD_POST } from "../types";

const initialState = {
  list: null,
  loading: null,
};

export const postReducer = (state = initialState, action) => {
  console.log('postReducer ==> ', action);
  switch (action.type) {
    case LIST_POST:
      return { ...state, list: action.payload, loading: true };
    case UPDATE_POST:
      return { ...state, list: action.payload, loading: true };
    case DELETE_POST:
      return { ...state, list: action.payload, loading: false };
    case ADD_POST:
      console.log('ADD_POST', action);
      return { ...state, list: action.payload, loading: false };
    default:
      break;
  }
  
  return state;
};
