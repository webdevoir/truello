import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import boardReducer from './board_reducer';
import boardDetailReducer from './board_detail_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  boards: boardReducer,
  boardDetail: boardDetailReducer
});

export default rootReducer;
