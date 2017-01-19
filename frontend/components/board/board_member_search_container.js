import { connect } from 'react-redux';
import { fetchSearchMembers, clearSearchMembers,
  removeSearchMember } from '../../actions/search_member_actions';
import { addMember } from '../../actions/member_actions';
import { selectSearchMembers } from '../../reducers/selectors';
import BoardMemberSearch from './board_member_search';

const mapStateToProps = state => ({
  searchMembers: selectSearchMembers(state),
  query: ''
});

const mapDispatchToProps = dispatch => ({
  fetchSearchMembers: (boardId, query) =>
    dispatch(fetchSearchMembers(boardId, query)),
  clearSearchMembers: () => dispatch(clearSearchMembers()),
  addMember: (boardId, member) => dispatch(addMember(boardId, member)),
  removeSearchMember: memberId => dispatch(removeSearchMember(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardMemberSearch);
