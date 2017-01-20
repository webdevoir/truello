import { connect } from 'react-redux';
import { deleteBoard } from '../../actions/board_actions';
import { fetchMembers, deleteMember } from
  '../../actions/member_actions';
import { selectMembers } from '../../reducers/selectors';
import BoardMenu from './board_menu';

const mapStateToProps = state => ({
  members: selectMembers(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchMembers: boardId => dispatch(fetchMembers(boardId)),
  deleteBoard: id => dispatch(deleteBoard(id)),
  deleteMember: (boardId, id) => dispatch(deleteMember(boardId, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardMenu);
