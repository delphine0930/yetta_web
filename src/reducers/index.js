import { combineReducers } from 'redux';
import blogReducer from './blog.js';

export default combineReducers({
    blogs: blogReducer
})