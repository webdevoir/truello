import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  null,
  mapDispatchToProps
)(BoardForm);
