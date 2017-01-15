export const fetchLists = boardId => (
  $.ajax({
    type: 'GET',
    url: `api/boards/${boardId}/lists`
  })
);

export const createList = list => (
  $.ajax({
    type: 'POST',
    url: 'api/lists',
    data: {list}
  })
);

export const updateList = list => (
  $.ajax({
    type: 'PATCH',
    url: `api/lists/${list.id}`,
    data: {list}
  })
);

export const deleteList = id => (
  $.ajax({
    type: 'DELETE',
    url: `api/lists/${id}`
  })
);
