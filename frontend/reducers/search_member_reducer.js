import { RECEIVE_SEARCH_MEMBERS, REMOVE_SEARCH_MEMBER,
  CLEAR_SEARCH_MEMBERS } from '../actions/search_member_actions';
import merge from 'lodash/merge';

const searchMemberReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_MEMBERS:
      return action.searchMembers;
    case REMOVE_SEARCH_MEMBER:
      const newState = merge({}, state);
      delete newState[action.searchMemberId];
      return newState;
    case CLEAR_SEARCH_MEMBERS:
      return {};
    default:
      return state;
  }
};

export default searchMemberReducer;
