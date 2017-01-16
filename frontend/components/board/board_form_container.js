import { connect } from 'react-redux';
import { createBoard, updateBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => {
  let board = { name: '' };
  if (ownProps.formType === 'edit') {
    board = selectBoard(state, ownProps.boardId);
  }
  return {
    board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === 'new' ? createBoard :
    updateBoard;
  return {
    action: board => dispatch(action(board))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
