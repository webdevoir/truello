import { connect } from 'react-redux';
import { deleteBoard } from '../../actions/board_actions';
import { fetchMembers } from '../../actions/member_actions';
import { selectMembers } from '../../reducers/selectors';
import BoardMenu from './board_menu';

const mapStateToProps = state => ({
  members: state.members
});

const mapDispatchToProps = dispatch => ({
  fetchMembers: boardId => dispatch(fetchMembers(boardId)),
  deleteBoard: id => dispatch(deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardMenu);
