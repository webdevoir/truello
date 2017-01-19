import * as MemberAPIUtil from '../util/member_api_util';

export const RECEIVE_SEARCH_MEMBERS = 'RECEIVE_SEARCH_MEMBERS';
export const REMOVE_SEARCH_MEMBER = 'REMOVE_SEARCH_MEMBER';
export const CLEAR_SEARCH_MEMBERS = 'CLEAR_SEARCH_MEMBERS';

export const fetchSearchMembers = (boardId, query) => dispatch => (
  MemberAPIUtil.fetchSearchMembers(boardId, query)
    .then(searchMembers => dispatch(receiveSearchMembers(searchMembers)))
);

export const clearSearchMembers = () => ({
  type: CLEAR_SEARCH_MEMBERS
});

export const removeSearchMember = searchMemberId => ({
  type: REMOVE_SEARCH_MEMBER,
  searchMemberId
});

const receiveSearchMembers = searchMembers => ({
  type: RECEIVE_SEARCH_MEMBERS,
  searchMembers
});
