import { connect } from 'react-redux';
import { updateBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardEditForm from './board_edit_form';

const mapStateToProps = (state, ownProps) => ({
  board: selectBoard(state, ownProps.boardId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoard: board => dispatch(updateBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
