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
      return <button className="block btn blue-btn form-btn" type="button"
              onClick={() => this.props.processForm(
                { username: "demo_user",
                  password: "password" })}
              >Demo User</button>;
    }
  }

  footerLink() {
    if (this.props.formType === "login") {
      return (<div className="form-footer">
                Don't have an account?&nbsp;
                <Link to="/signup">Create a Truello account.</Link>
              </div>);
    } else {
      return (
        <div className="form-footer">
          Already have an account?&nbsp;
          <Link to="/login">Log in.</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul className="form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  headerText() {
    return this.props.formType === "login" ?
    <h1>Log in to Truello</h1>
      : <h1>Create a Truello Account</h1>;
  }

  submitText() {
    return this.props.formType === "login" ?
      "Log In" : "Create New Account";
  }

  render() {
    return (
      <div className="outer-form-screen">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.headerText()}
            {this.renderErrors()}
            <div className="login-form">
              <div className="form-input-container">
              <label className="form-label" htmlFor="form-name">Name</label>
                <input id="form-name" type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="form-input block" />
              </div>
              <div className="form-input-container">
              <label className="form-label"
                htmlFor="form-password">Password</label>
                <input id="form-password" type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="form-input block" />
              </div>
              <button className="block btn green-btn form-btn">
                {this.submitText()}</button>
              {this.demoLogin()}
            </div>
          </form>
          {this.footerLink()}
        </div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
