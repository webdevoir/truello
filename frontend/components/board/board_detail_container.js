import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchLists, clearLists } from '../../actions/list_actions';
import { fetchCards, clearCards } from '../../actions/card_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardDetail from './board_detail';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUser ?
    state.session.currentUser.id : null,
  board: selectBoard(state, ownProps.params.boardId)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchLists: boardId => dispatch(fetchLists(boardId)),
  fetchCards: boardId => dispatch(fetchCards(boardId)),
  clearLists: () => dispatch(clearLists()),
  clearCards: () => dispatch(clearCards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
