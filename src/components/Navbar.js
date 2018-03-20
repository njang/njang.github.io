import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
class Navbar extends Component {
	render() {
		return (
			<nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
				<div className='container'>
					<NavLink className='navbar-brand' to='/'>Neo Jang</NavLink>
					<button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarResponsive'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/about'>About</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/works'>Works</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/contact'>Contact</NavLink>
							</li>
						</ul>
					</div>
				</div>
		    </nav>
		);
	}
}
 
export default Navbar;