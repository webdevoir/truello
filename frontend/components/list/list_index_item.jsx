import React from 'react';
import ListFormContainer from './list_form_container';

const ListIndexItem = ({ list, boardId }) => (
  <li className="list-index-item">
    <div>
      <h3>{list.name}</h3>
      <ListFormContainer formType='edit' boardId={boardId} list={list} />
    </div>
  </li>
);

export default ListIndexItem;
