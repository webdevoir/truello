import { connect } from 'react-redux';
import { createBoard, updateBoardDetail } from '../../actions/board_actions';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => {
  let board = { name: '' };
  if (ownProps.formType === 'edit') {
    board = state.boardDetail;
  }
  return { board };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === 'new' ? createBoard :
    updateBoardDetail;
  return {
    action: boardDetail => dispatch(action(boardDetail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
