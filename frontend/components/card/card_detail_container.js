import { connect } from 'react-redux';
import { selectCard, selectLists, selectBoard } from
  '../../reducers/selectors';
import { fetchCard, updateCard, deleteCard } from
  '../../actions/card_actions';
import CardDetail from './card_detail';

const mapStateToProps = (state, ownProps) => ({
  card: selectCard(state, ownProps.params.cardId),
  board: selectBoard(state, ownProps.params.boardId),
  lists: selectLists(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCard: id => dispatch(fetchCard(id)),
  updateCard: card => dispatch(updateCard(card)),
  deleteCard: id => dispatch(deleteCard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);
