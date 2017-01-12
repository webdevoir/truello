import { RECEIVE_BOARD_DETAIL } from '../actions/board_actions';

const boardDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD_DETAIL:
      return action.boardDetail;
    default:
      return state;
  }
};

export default boardDetailReducer;
