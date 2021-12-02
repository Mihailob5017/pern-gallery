import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const middleware = [];

export const Store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);
