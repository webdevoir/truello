import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_DETAIL = 'RECEIVE_BOARD_DETAIL';

export const fetchBoards = () => dispatch => (
  BoardAPIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards)))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board)
    .then(newBoard => dispatch(receiveBoard(newBoard)))
);

export const fetchBoard = id => dispatch => (
  BoardAPIUtil.fetchBoard(id)
    .then(boardDetail => dispatch(receiveBoardDetail(boardDetail)))
);

export const updateBoardDetail = boardDetail => dispatch => (
  BoardAPIUtil.updateBoardDetail(boardDetail)
    .then(newBoardDetail => dispatch(receiveBoardDetail(newBoardDetail)))
);

const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const receiveBoardDetail = boardDetail => ({
  type: RECEIVE_BOARD_DETAIL,
  boardDetail
});
