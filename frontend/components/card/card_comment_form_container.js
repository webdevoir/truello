import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CardCommentForm from './card_comment_form';

const mapStateToProps = (state, ownProps) => ({
  comment: { card_id: ownProps.cardId, text: '' }
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCommentForm);
