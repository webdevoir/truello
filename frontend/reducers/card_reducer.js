import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD, CLEAR_CARDS } from
  '../actions/card_actions';
import merge from 'lodash/merge';

const cardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      return merge({}, state, { [action.card.id]: action.card });
    case REMOVE_CARD:
      const newState = merge({}, state);
      delete newState[action.card.id];
      return newState;
    case CLEAR_CARDS:
      return {};
    default:
      return state;
  }
};

export default cardReducer;
