import { connect } from 'react-redux';
import { selectCards } from '../../reducers/selectors';
import CardIndex from './card_index';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: selectCards(state, ownProps.listId)
  };
};

export default connect(
  mapStateToProps
)(CardIndex);
