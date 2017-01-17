import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchLists } from '../../actions/list_actions';
import { fetchCards } from '../../actions/card_actions';
import BoardDetail from './board_detail';

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchLists: boardId => dispatch(fetchLists(boardId)),
  fetchCards: boardId => dispatch(fetchCards(boardId))
});

export default connect(
  null,
  mapDispatchToProps
)(BoardDetail);
