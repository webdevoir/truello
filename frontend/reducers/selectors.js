export const selectBoards = state => {
  const currentUser = state.session.currentUser;
  if (currentUser) {
    return Object.keys(state.boards)
    .filter(id => state.boards[id].owner_id === currentUser.id)
    .map(id => state.boards[id]);
  } else {
    return [];
  }
};

export const selectSharedBoards = state => {
  const currentUser = state.session.currentUser;
  if (currentUser) {
    return Object.keys(state.boards)
      .filter(id => state.boards[id].owner_id !== state.session.currentUser.id)
      .map(id => state.boards[id]);
  } else {
    return [];
  }
};

export const selectBoard = (state, boardId) => {
  boardId = parseInt(boardId);
  return state.boards[boardId] || { name: '' };
};

export const selectLists = state => (
  Object.keys(state.lists).map(id => state.lists[id])
);

export const selectCards = (state, listId) => {
  listId = parseInt(listId);
  return Object.keys(state.cards)
    .filter(id => state.cards[id].list_id === listId)
    .map(id => state.cards[id])
    .sort((a, b) => a.list_order - b.list_order);
};

export const selectCard = (state, cardId) => {
  cardId = parseInt(cardId);
  return state.cards[cardId] ||
    { name: '', description: '', list_id: '' };
};

export const selectSearchMembers = state => {
  if (state.searchMembers) {
    return Object.keys(state.searchMembers)
      .map(id => state.searchMembers[id]);
  }
  return [];
};

export const selectMembers = state => {
  const members = [state.session.currentUser];
  return members.concat(Object.keys(state.members)
    .map(id => state.members[id]));
};

export const selectComments = state => {
  return Object.keys(state.comments)
    .map(id => state.comments[id]).reverse();
};
