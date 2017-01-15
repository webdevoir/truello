import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardDetail from './board_detail';

const mapStateToProps = (state, ownProps) => ({
  board: selectBoard(state, ownProps.params.boardId)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
