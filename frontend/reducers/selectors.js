export const selectAllBoards = state => (
  Object.keys(state.boards).map(id => state.boards[id])
);

export const selectBoardDetailLists = (state) => {
  if (state.boardDetail && state.boardDetail.lists) {
    const lists = state.boardDetail.lists;
    return Object.keys(lists).map(listId => lists[listId]);
  }
  return [];
};
