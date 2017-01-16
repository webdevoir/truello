export const selectBoards = state => (
  Object.keys(state.boards).map(id => state.boards[id])
);

export const selectBoard = (state, boardId) => {
  boardId = parseInt(boardId);
  return state.boards[boardId] || {};
};

export const selectLists = state => (
  Object.keys(state.lists).map(id => state.lists[id])
);

export const selectCards = (state, listId) => {
  listId = parseInt(listId);
  return Object.keys(state.cards)
    .filter(id => state.cards[id].list_id === listId)
    .map(id => state.cards[id]);
};

export const selectCard = (state, cardId) => {
  cardId = parseInt(cardId);
  return state.cards[cardId] || {};
};
