import { combineReducers } from 'redux';

import userReducer from '';
import postReducer from '';
import commentReducer from '';

export default combineReducers({
	user: userReducer,
	post: postReducer,
	comment: commentReducer,
});
