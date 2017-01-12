import React from 'react';
import { Link, withRouter } from 'react-router';

const signup = () => (
  <div className="header-button-group">
    <Link to="/login" className="btn">Log In</Link>
    <Link to="/signup"
      className="btn signup-link">Sign up</Link>
  </div>
);

const personalGreeting = (currentUser, logout, router) => (
	<div className="header-group">
    <h2 className="user-name">{currentUser.username}</h2>
    <button className="btn"
      onClick={() => logout().then(() => router.push('/'))}>
      Log Out</button>
	</div>
);

const Navbar = ({ currentUser, logout, router }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
        <h1><i className="fa fa-book"></i> Truello</h1>
      </Link>
    </div>
    { currentUser ? personalGreeting(currentUser, logout, router) : signup() }
  </nav>
);

export default withRouter(Navbar);
