import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchLists, clearLists } from '../../actions/list_actions';
import { fetchCards, clearCards } from '../../actions/card_actions';
import BoardDetail from './board_detail';

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchLists: boardId => dispatch(fetchLists(boardId)),
  fetchCards: boardId => dispatch(fetchCards(boardId)),
  clearLists: () => dispatch(clearLists()),
  clearCards: () => dispatch(clearCards())
});

export default connect(
  null,
  mapDispatchToProps
)(BoardDetail);
