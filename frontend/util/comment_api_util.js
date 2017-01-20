export const fetchComments = cardId => (
  $.ajax({
    type: 'GET',
    url: `api/cards/${cardId}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    type: 'DELETE',
    url: `api/comments/${id}`
  })
);
