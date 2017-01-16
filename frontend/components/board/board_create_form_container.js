import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state, ownProps) => ({
  board: { name: '' }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateForm);
