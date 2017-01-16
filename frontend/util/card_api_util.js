export const fetchCards = boardId => (
  $.ajax({
    type: 'GET',
    url: `api/boards/${boardId}/cards`
  })
);

export const fetchCard = id => (
  $.ajax({
    type: 'GET',
    url: `api/cards/${id}`
  })
);

export const createCard = card => (
  $.ajax({
    type: 'POST',
    url: 'api/cards',
    data: {card}
  })
);

export const updateCard = card => (
  $.ajax({
    type: 'PATCH',
    url: `api/cards/${card.id}`,
    data: {card}
  })
);

export const deleteCard = id => (
  $.ajax({
    type: 'DELETE',
    url: `api/cards/${id}`
  })
);
