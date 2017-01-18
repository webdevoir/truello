import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(login({ username: "Guest",
    password: "password" }))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
