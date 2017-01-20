import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import boardReducer from './board_reducer';
import listReducer from './list_reducer';
import cardReducer from './card_reducer';
import memberReducer from './member_reducer';
import searchMemberReducer from './search_member_reducer';
import commentReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  boards: boardReducer,
  lists: listReducer,
  cards: cardReducer,
  members: memberReducer,
  searchMembers: searchMemberReducer,
  comments: commentReducer
});

export default rootReducer;
