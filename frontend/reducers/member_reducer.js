import { RECEIVE_MEMBERS, RECEIVE_MEMBER, REMOVE_MEMBER } from
  '../actions/member_actions';
import merge from 'lodash/merge';

const memberReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMBERS:
      return action.members;
    case RECEIVE_MEMBER:
      return merge({}, state, { [action.member.id]: action.member });
    case REMOVE_MEMBER:
      const newState = merge({}, state);
      delete newState[action.member.id];
      return newState;
    default:
      return state;
  }
};

export default memberReducer;
