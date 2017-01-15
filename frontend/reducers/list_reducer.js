import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST, CLEAR_LISTS } from
  '../actions/list_actions';
import merge from 'lodash/merge';

const listReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list });
    case REMOVE_LIST:
      const newState = merge({}, state);
      delete newState[action.list.id];
      return newState;
    case CLEAR_LISTS:
      return {};
    default:
      return state;
  }
};

export default listReducer;
