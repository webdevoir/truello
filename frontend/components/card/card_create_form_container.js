import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import CardCreateForm from './card_create_form';

const mapStateToProps = (state, ownProps) => ({
  card: { name: '', description: '', list_id : ownProps.listId }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCard: card => dispatch(createCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCreateForm);
