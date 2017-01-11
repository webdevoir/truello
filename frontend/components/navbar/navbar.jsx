import React from 'react';
import { Link } from 'react-router';

const signup = () => (
  <div className="header-button-group">
    <Link to="/login" className="btn">Log In</Link>
    <Link to="/signup"
      className="btn signup-link">Sign up</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <h2 className="user-name">{currentUser.username}</h2>
    <button className="btn" onClick={logout}>Log Out</button>
	</div>
);

const Navbar = ({ currentUser, logout }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
        <h1>Truello</h1>
      </Link>
    </div>
    { currentUser ? personalGreeting(currentUser, logout) : signup() }
  </nav>
);

export default Navbar;
