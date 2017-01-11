import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({ username: "", password: "" },
      () => this.props.clearErrors());
    }
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  demoLogin() {
    if (this.props.formType === "login") {
      return <button type="button"
              onClick={() => this.props.processForm(
                { username: "demo_user",
                  password: "password" })}
              >Demo User</button>;
    }
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  footerLink() {
    if (this.props.formType === "login") {
      return (<div>
                Don't have an account?&nbsp;
                <Link to="/signup">Create a Truello account.</Link>
              </div>);
    } else {
      return (
        <div>
          Already have an account?&nbsp;
          <Link to="/login">Log in.</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  headerText() {
    return this.props.formType === "login" ? "Log in to Truello"
      : "Create a Truello Account";
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.headerText()}
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label className="form-label" htmlFor="form-name">Name</label>
              <input id="form-name" type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                required />
            <br/>
            <label className="form-label"
              htmlFor="form-password">Password</label>
              <input id="form-password" type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                required />
            <br/>
            <button>Submit</button>
            {this.demoLogin()}
          </div>
        </form>
        {this.footerLink()}
      </div>
    );
  }

}

export default withRouter(SessionForm);
