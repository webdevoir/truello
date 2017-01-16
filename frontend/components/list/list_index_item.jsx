import React from 'react';
import ListUpdateFormContainer from './list_update_form_container';
import CardIndexContainer from '../card/card_index_container';

const ListIndexItem = ({ list, boardId }) => (
  <li className="list-index-item">
    <ListUpdateFormContainer boardId={boardId} list={list} />
    <CardIndexContainer listId={list.id} />
  </li>
);

export default ListIndexItem;
