import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// Code
ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
