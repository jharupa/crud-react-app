import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './reducers/post.reducer';

const reducers = combineReducers({
    post : postReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))
