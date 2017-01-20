import { connect } from 'react-redux';
import { selectComments } from '../../reducers/selectors';
import { fetchComments, clearComments, deleteComment } from
  '../../actions/comment_actions';
import CardCommentIndex from './card_comment_index';

const mapStateToProps = state => ({
  comments: selectComments(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id)),
  clearComments: () => dispatch(clearComments()),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCommentIndex);
