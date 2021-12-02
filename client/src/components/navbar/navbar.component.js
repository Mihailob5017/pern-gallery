import React from 'react';
import './navbar.style.css';

// React Router
import {} from 'react-router-dom';

// Code
const NavbarComponent = ({ children }) => {
	return (
		<div className='navbar-wrapper'>
			<em>
				<h1 className='navbar-title'>PicoGram</h1>
			</em>
		</div>
	);
};

export default NavbarComponent;
