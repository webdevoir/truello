import { connect } from 'react-redux';
import { selectCard } from '../../reducers/selectors';
import { fetchCard, updateCard } from '../../actions/card_actions';
import CardDetail from './card_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    card: selectCard(state, ownProps.params.cardId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCard: id => dispatch(fetchCard(id)),
  updateCard: card => dispatch(updateCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);
