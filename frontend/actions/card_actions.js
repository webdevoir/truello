import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const CLEAR_CARDS = 'CLEAR_CARDS';

export const fetchCards = boardId => dispatch => (
  CardAPIUtil.fetchCards(boardId)
    .then(cards => dispatch(receiveCards(cards)))
);

export const fetchCard = id => dispatch => (
  CardAPIUtil.fetchCard(id)
    .then(card => dispatch(receiveCard(card)))
);

export const createCard = card => dispatch => (
  CardAPIUtil.createCard(card)
    .then(newCard => dispatch(receiveCard(newCard)))
);

export const updateCard = card => dispatch => (
  CardAPIUtil.updateCard(card)
    .then(newCard => dispatch(receiveCard(newCard)))
);

export const deleteCard = id => dispatch => (
  CardAPIUtil.deleteCard(id)
    .then(card => dispatch(removeCard(card)))
);

export const clearCards = () => ({
  type: CLEAR_CARDS
});

const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

const removeCard = card => ({
  type: REMOVE_CARD,
  card
});
