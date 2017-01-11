import React from 'react';
import { Link } from 'react-router';

const signup = () => (
  <div className="header-group">
    <Link to="/login" activeClassName="current">Login</Link>&nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <h2 className="user-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</div>
);

const Navbar = ({ currentUser, logout }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/" className="header-link">
        <h1>Truello</h1>
      </Link>
    </div>
    { currentUser ? personalGreeting(currentUser, logout) : signup() }
  </nav>
);

export default Navbar;
