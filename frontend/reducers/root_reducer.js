import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import boardReducer from './board_reducer';
import listReducer from './list_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  boards: boardReducer,
  lists: listReducer
});

export default rootReducer;
