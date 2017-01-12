export const selectAllBoards = state => (
  Object.keys(state.boards).map(id => state.boards[id])
);
