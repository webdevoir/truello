import * as MemberAPIUtil from '../util/member_api_util';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';

export const fetchMembers = boardId => dispatch => (
  MemberAPIUtil.fetchMembers(boardId)
    .then(members => dispatch(receiveMembers(members)))
);

export const addMember = (boardId, member) => dispatch => (
  MemberAPIUtil.addMember(boardId, member)
    .then(newMember => dispatch(receiveMember(newMember)))
);

export const deleteMember = (boardId, memberId) => dispatch => (
  MemberAPIUtil.deleteMember(boardId, memberId)
    .then(newMember => dispatch(removeMember(newMember)))
);

const receiveMembers = members => ({
  type: RECEIVE_MEMBERS,
  members
});

const receiveMember = member => ({
  type: RECEIVE_MEMBER,
  member
});

const removeMember = member => ({
  type: REMOVE_MEMBER,
  member
});
