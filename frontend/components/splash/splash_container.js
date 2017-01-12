import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(login({ username: "demo_user",
    password: "password" }))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
