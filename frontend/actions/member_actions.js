import * as MemberAPIUtil from '../util/member_api_util';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';

export const fetchMembers = boardId => dispatch => (
  MemberAPIUtil.fetchMembers(boardId)
    .then(members => dispatch(receiveMembers(members)))
);

export const addMember = (boardId, member) => dispatch => (
  MemberAPIUtil.addMember(boardId, member)
    .then(newMember => dispatch(receiveMember(newMember)))
);

const receiveMembers = members => ({
  type: RECEIVE_MEMBERS,
  members
});

const receiveMember = member => ({
  type: RECEIVE_MEMBER,
  member
});
