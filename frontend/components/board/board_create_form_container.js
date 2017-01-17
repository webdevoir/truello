import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardCreateForm from './board_create_form';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  null,
  mapDispatchToProps
)(BoardCreateForm);
