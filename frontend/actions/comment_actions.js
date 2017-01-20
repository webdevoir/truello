import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const fetchComments = cardId => dispatch => (
  CommentAPIUtil.fetchComments(cardId)
    .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comments => dispatch(receiveComment(comments)))
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id)
    .then(comment => dispatch(removeComment(comment)))
);

export const clearComments = () => ({
  type: CLEAR_COMMENTS
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
