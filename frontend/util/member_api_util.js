export const fetchMembers = boardId => (
  $.ajax({
    type: 'GET',
    url: 'api/users',
    data: { board_id: boardId }
  })
);

export const fetchSearchMembers = (boardId, query) => (
  $.ajax({
    type: 'GET',
    url: 'api/users/search',
    data: {
      board_id: boardId,
      query
    }
  })
);

export const addMember = (boardId, member) => (
  $.ajax({
    type: 'POST',
    url: `api/boards/${boardId}/member`,
    data: { member }
  })
);

export const deleteMember = (boardId, member) => (
  $.ajax({
    type: 'POST',
    url: `api/boards/${boardId}/member`,
    data: { member }
  })
);
