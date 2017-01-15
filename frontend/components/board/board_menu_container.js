import { connect } from 'react-redux';
import { deleteBoard } from '../../actions/board_actions';
import BoardMenu from './board_menu';

const mapDispatchToProps = (dispatch) => ({
  deleteBoard: (id) => dispatch(deleteBoard(id))
});

export default connect(
  null,
  mapDispatchToProps
)(BoardMenu);
