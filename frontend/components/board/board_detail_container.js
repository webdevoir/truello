import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchLists } from '../../actions/list_actions';
import { fetchCards } from '../../actions/card_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardDetail from './board_detail';

const mapStateToProps = (state, ownProps) => ({
  board: selectBoard(state, ownProps.params.boardId)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchLists: boardId => dispatch(fetchLists(boardId)),
  fetchCards: boardId => dispatch(fetchCards(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
