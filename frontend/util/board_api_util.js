export const fetchBoards = () => (
  $.ajax({
    type: 'GET',
    url: 'api/boards'
  })
);

export const fetchBoard = id => (
  $.ajax({
    type: 'GET',
    url: `api/boards/${id}`
  })
);

export const createBoard = board => (
  $.ajax({
    type: 'POST',
    url: 'api/boards',
    data: {board}
  })
);

export const updateBoard = board => (
  $.ajax({
    type: 'PATCH',
    url: `api/boards/${board.id}`,
    data: {board}
  })
);

export const deleteBoard = id => (
  $.ajax({
    type: 'DELETE',
    url: `api/boards/${id}`
  })
);
