import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const CLEAR_LISTS = 'CLEAR_LISTS';

export const fetchLists = (boardId) => dispatch => (
  ListAPIUtil.fetchLists(boardId)
    .then(lists => dispatch(receiveLists(lists)))
);

export const createList = list => dispatch => (
  ListAPIUtil.createList(list)
    .then(newList => dispatch(receiveList(newList)))
);

export const updateList = list => dispatch => (
  ListAPIUtil.updateList(list)
    .then(newList => dispatch(receiveList(newList)))
);

export const deleteList = id => dispatch => (
  ListAPIUtil.deleteList(id)
    .then(list => dispatch(removeList(list)))
);

export const clearLists = () => ({
  type: CLEAR_LISTS
});

const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

const removeList = list => ({
  type: REMOVE_LIST,
  list
});
