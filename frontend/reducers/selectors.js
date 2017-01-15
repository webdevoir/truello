export const selectBoards = state => (
  Object.keys(state.boards).map(id => state.boards[id])
);

export const selectBoard = (state, boardId) => {
  boardId = parseInt(boardId);
  return state.boards[boardId] || {};
};

export const selectLists = (state) => (
  Object.keys(state.lists).map(id => state.lists[id])
);
