import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const fetchBoards = () => dispatch => (
  BoardAPIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards)))
);

export const fetchBoard = id => dispatch => (
  BoardAPIUtil.fetchBoard(id)
  .then(board => dispatch(receiveBoard(board)))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board)
    .then(newBoard => dispatch(receiveBoard(newBoard)))
);

export const updateBoard = board => dispatch => (
  BoardAPIUtil.updateBoard(board)
    .then(newBoard => dispatch(receiveBoard(newBoard)))
);

export const deleteBoard = id => dispatch => (
  BoardAPIUtil.deleteBoard(id)
    .then(board => dispatch(removeBoard(board)))
);

const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const removeBoard = board => ({
  type: REMOVE_BOARD,
  board
});
