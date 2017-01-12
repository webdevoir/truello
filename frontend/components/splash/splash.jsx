import React from 'react';
import { Link, withRouter } from 'react-router';

const Splash = ({ demoLogin, router }) => (
  <div className="splash">
    <div className="splash-box">
      <h2>Manage your projects with</h2>
      <h1><i className="fa fa-book"></i> Truello</h1>
      <div className="link-group">
        <Link to="/login" className="btn">Log In</Link>
        <Link to="/signup"
          className="btn signup-link">Sign up</Link>
      </div>
      <button className="btn demo-button"
        onClick={() => demoLogin().then(() => router.push('/boards'))}
        >Demo User</button>
    </div>
  </div>
);

export default withRouter(Splash);
