import React from 'react';

// React Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavbarComponent from './components/navbar/navbar.component';

// Code
const App = () => {
	return (
		<BrowserRouter>
			<NavbarComponent>123</NavbarComponent>
			<Routes></Routes>
		</BrowserRouter>
	);
};

export default App;
