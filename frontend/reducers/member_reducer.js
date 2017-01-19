import { RECEIVE_MEMBERS, RECEIVE_MEMBER } from
  '../actions/member_actions';
import merge from 'lodash/merge';

const memberReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMBERS:
      return action.members;
    case RECEIVE_MEMBER:
      const newState = merge([], state);
      newState.push(action.member);
      return newState;
    default:
      return state;
  }
};

export default memberReducer;
